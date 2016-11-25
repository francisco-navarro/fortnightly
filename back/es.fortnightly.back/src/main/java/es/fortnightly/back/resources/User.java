package es.fortnightly.back.resources;

public class User {
	
	public String userName;
	public String email;
	public Double virtualAmount;
	public Double realAmount;
	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}
	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the virtualAmount
	 */
	public Double getVirtualAmount() {
		return virtualAmount;
	}
	/**
	 * @param virtualAmount the virtualAmount to set
	 */
	public void setVirtualAmount(Double virtualAmount) {
		this.virtualAmount = virtualAmount;
	}
	/**
	 * @return the realAmount
	 */
	public Double getRealAmount() {
		return realAmount;
	}
	/**
	 * @param realAmount the realAmount to set
	 */
	public void setRealAmount(Double realAmount) {
		this.realAmount = realAmount;
	}
	

}
