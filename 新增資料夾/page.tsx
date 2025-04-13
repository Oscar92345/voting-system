import { useState } from 'react';

export default function App() {
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (option) => {
    if (!hasVoted) {
      alert(`您已投票給 ${option}！感謝您的參與！`);
      setHasVoted(true);
    } else {
      alert("您已經投過票了，無法重複投票！");
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>內湖高中風城演辯社第三十六屆成果發表</h1>
      <p>辯題：人生是否必須經歷痛苦才能獲得真正的成長</p>
      <hr />
      <h2>觀眾投票環節</h2>
      <p style={{ fontSize: '14px' }}>印象票</p>
      <button
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => handleVote('正方')}
        disabled={hasVoted}
      >
        投票給正方
      </button>
      <button
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
        onClick={() => handleVote('反方')}
        disabled={hasVoted}
      >
        投票給反方
      </button>
      <hr />
      <h2>管理員頁面</h2>
      <p>投票結果：此功能目前尚未完成。</p>
    </div>
  );
}
