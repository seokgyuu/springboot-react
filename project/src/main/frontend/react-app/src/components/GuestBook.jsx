import React, { useState } from 'react';

const GuestBook = () => {
  const [entries, setEntries] = useState([]); 
  const [name, setName] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [isFormVisible, setIsFormVisible] = useState(false); // 폼 표시 여부

  // 입력값 핸들링
  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // 방명록 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setEntries([...entries, { name, message }]);
      setName('');
      setMessage('');
      setIsFormVisible(false); // 글 작성 후 폼 숨김
    } else {
      alert('이름과 메시지를 입력해주세요.');
    }
  };

  // 폼 토글
  const toggleForm = () => {
    setIsFormVisible((prevState) => !prevState);
  };

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
                onChange={handleNameChange}
                className="form-input"
                placeholder="이름을 입력하세요"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">
              메시지:
              <textarea
                value={message}
                onChange={handleMessageChange}
                className="form-textarea"
                placeholder="메시지를 입력하세요"
              ></textarea>
            </label>
          </div>
          <button type="submit" className="form-button">추가</button>
        </form>
      )}

      <div className="guestbook-list">
        <h2 className="list-title">방명록 목록</h2>
        {entries.length > 0 ? (
          <ul className="list-items">
            {entries.map((entry, index) => (
              <li key={index} className="list-item">
                <strong className="entry-name">{entry.name}:</strong>
                <p className="entry-message">{entry.message}</p>
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
