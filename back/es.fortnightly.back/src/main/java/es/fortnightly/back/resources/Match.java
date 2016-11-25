package es.fortnightly.back.resources;

import java.util.Date;

public class Match {
	
	private int idVisitor;
	private String visitor;
	private int idHome;
	private String home;
	private Date date;
	private int score1;
	private int score2;
	
	public int getIdVisitor() {
		return idVisitor;
	}
	public void setIdVisitor(int idVisitor) {
		this.idVisitor = idVisitor;
	}
	public String getVisitor() {
		return visitor;
	}
	public void setVisitor(String visitor) {
		this.visitor = visitor;
	}
	public int getIdHome() {
		return idHome;
	}
	public void setIdHome(int idHome) {
		this.idHome = idHome;
	}
	public String getHome() {
		return home;
	}
	public void setHome(String home) {
		this.home = home;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
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
	
	
	
	
	
	
}
