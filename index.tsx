import React, { useState } from "react";

const App: React.FC = () => {
  const [votes, setVotes] = useState<{ positive: number; negative: number }>({
    positive: 0,
    negative: 0,
  });
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  const handleVote = (option: "positive" | "negative") => {
    if (!hasVoted) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [option]: prevVotes[option] + 1,
      }));
      setHasVoted(true);
      alert(`感謝您的投票！您選擇的是：${option === "positive" ? "正方" : "反方"}`);
    } else {
      alert("您已經投過票了，無法重複投票！");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>內湖高中風城演辯社第三十六屆成果發表</h1>
      <p>辯題：人生是否必須經歷痛苦才能獲得真正的成長</p>

      <div style={{ margin: "20px" }}>
        <h2>觀眾投票環節</h2>
        <p style={{ fontSize: "14px" }}>印象票</p>

        <button
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleVote("positive")}
          disabled={hasVoted}
        >
          投票給正方
        </button>

        <button
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleVote("negative")}
          disabled={hasVoted}
        >
          投票給反方
        </button>

        <div style={{ marginTop: "20px", fontSize: "16px" }}>
          <p>正方票數：{votes.positive}</p>
          <p>反方票數：{votes.negative}</p>
        </div>
      </div>
    </div>
  );
};

export default App;