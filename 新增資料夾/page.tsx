import React, { useState } from "react";

// 投票系統主元件
const VotingSystem: React.FC = () => {
  // 狀態：投票數
  const [votes, setVotes] = useState<{ positive: number; negative: number }>({
    positive: 0,
    negative: 0,
  });

  // 狀態：是否已投票
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  // 處理投票邏輯
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

  // 重置投票（管理員功能）
  const resetVotes = () => {
    setVotes({ positive: 0, negative: 0 });
    setHasVoted(false);
    alert("投票系統已重置！");
  };

  return (
    <div style={styles.container}>
      {/* 主題區域 */}
      <h1 style={styles.title}>內湖高中風城演辯社第三十六屆成果發表</h1>
      <p style={styles.subtitle}>
        辯題：人生是否必須經歷痛苦才能獲得真正的成長
      </p>

      {/* 投票區域 */}
      <div style={styles.voteSection}>
        <h2>觀眾投票環節</h2>
        <p style={styles.impressionNote}>印象票</p>
        <div>
          {/* 正方選項按鈕 */}
          <button
            style={styles.button}
            onClick={() => handleVote("positive")}
            disabled={hasVoted}
          >
            投票給正方
          </button>

          {/* 反方選項按鈕 */}
          <button
            style={styles.button}
            onClick={() => handleVote("negative")}
            disabled={hasVoted}
          >
            投票給反方
          </button>
        </div>

        {/* 顯示投票數 */}
        <div style={styles.voteCount}>
          <p>正方票數：{votes.positive}</p>
          <p>反方票數：{votes.negative}</p>
        </div>
      </div>

      {/* 管理區域（可選） */}
      <div style={styles.adminSection}>
        <h2>管理員區域</h2>
        <button style={styles.resetButton} onClick={resetVotes}>
          重置投票
        </button>
      </div>
    </div>
  );
};

// 樣式設定
const styles = {
  container: {
    textAlign: "center" as const,
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  voteSection: {
    marginBottom: "30px",
  },
  impressionNote: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  voteCount: {
    marginTop: "20px",
    fontSize: "16px",
  },
  adminSection: {
    marginTop: "30px",
  },
  resetButton: {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default VotingSystem;
