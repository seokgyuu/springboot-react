import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const GuestBook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/guestbook';

  // fetchEntries를 useCallback으로 메모이제이션
  const fetchEntries = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setEntries(response.data);
    } catch (error) {
      setError(error.response?.data?.message || '데이터를 가져오는 중 문제가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [API_URL]);

  // useEffect에 fetchEntries 추가
  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert('이름과 메시지를 입력해주세요.');
      return;
    }

    setIsProcessing(true);
    try {
      await axios.post(API_URL, { name, message });
      setName('');
      setMessage('');
      setIsFormVisible(false);
      fetchEntries();
    } catch (error) {
      setError(error.response?.data?.message || '데이터 추가 중 문제가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async (nameToDelete) => {
    const confirmDelete = window.confirm(`${nameToDelete}님을 삭제하시겠습니까?`);
    if (!confirmDelete) return;

    setIsProcessing(true);
    try {
      await axios.delete(`${API_URL}/${nameToDelete}`);
      fetchEntries();
    } catch (error) {
      setError(error.response?.data?.message || '데이터 삭제 중 문제가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  const toggleForm = () => setIsFormVisible((prev) => !prev);

  return (
    <div className="guestbook-container">
      <h1 className="guestbook-title">방명록</h1>
      <button onClick={toggleForm} className="toggle-button">
        {isFormVisible ? '작성 취소' : '글쓰기'}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="guestbook-form">
          <div className="form-group">
            <label className="form-label">
              이름:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="이름을 입력하세요"
                autoFocus
                disabled={isProcessing}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              메시지:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-textarea"
                placeholder="메시지를 입력하세요"
                disabled={isProcessing}
              ></textarea>
            </label>
          </div>
          <button type="submit" className="form-button" disabled={isProcessing}>
            {isProcessing ? '추가 중...' : '추가'}
          </button>
        </form>
      )}

      <div className="guestbook-list">
        <h2 className="list-title">방명록 목록</h2>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : entries.length > 0 ? (
          <ul className="list-items">
            {entries.map((entry, index) => (
              <li key={index} className="list-item">
                <strong className="entry-name">{entry.name}:</strong>
                <p className="entry-message">{entry.message}</p>
                <button className="delete-button" onClick={() => handleDelete(entry.name)} disabled={isProcessing}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-entries">아직 방명록에 작성된 메시지가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default GuestBook;
