package es.fortnightly.back.resources;

public class Bet {
	
	private int id;
	private int matchId;
	private int userId;
	private int score1;
	private int score2;
	private int matchResult;
	private float quantity;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getMatchId() {
		return matchId;
	}
	public void setMatchId(int matchId) {
		this.matchId = matchId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getScore1() {
		return score1;
	}
	public void setScore1(int score1) {
		this.score1 = score1;
	}
	public int getScore2() {
		return score2;
	}
	public void setScore2(int score2) {
		this.score2 = score2;
	}
	public int getMatchResult() {
		return matchResult;
	}
	public void setMatchResult(int matchResult) {
		this.matchResult = matchResult;
	}
	public float getQuantity() {
		return quantity;
	}
	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}
	
	

}
