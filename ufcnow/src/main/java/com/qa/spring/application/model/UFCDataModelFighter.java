package com.qa.spring.application.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

//import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "fighter_list")
@EntityListeners(AuditingEntityListener.class)
public class UFCDataModelFighter implements Serializable {

    public UFCDataModelFighter() {

    }

    public UFCDataModelFighter(String firstName, String lastName, String pob, String description, String weightClass, String dob, String style) {
        //this.fighter_id = fighter_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.weightClass = weightClass; 
        this.dob = dob;
        this.style = style;
        this.pob = pob;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fighter_id") private int fighter_id;
    @Column(name = "style") private String style;
    @Column(name = "pob") private String pob;
    @Column(name = "description") private String description;
    @Column(name = "weightclass") private String weightClass;
	@NotBlank
	@Column(name = "firstname")  private String firstName;
	@Column(name = "lastname") private String lastName;
	@Column(name = "dob") private String dob;
    
    public int getfighter_id() {
        return fighter_id;
    }

    public void setfighter_id(int fighter_id) {
        this.fighter_id = fighter_id;
    }
    
    public String getstyle() {
    	return style;
    }
    
    public void setstyle(String style) {
    	this.style = style;
    }
    
    public String getdob() {
    	return dob;
    }
    
    public void setDOB(String dob) {
    	this.dob = dob;
    }
   
    public String getweightClass() {
        return weightClass;
    }

    public void setweightClass(String weightClass) {
        this.weightClass = weightClass;
    }

    public String getfirstName() {
    	return firstName;
    }
    
    public void setfirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
    	return lastName;
    }
    
    public void setlastName(String lastName) {
        this.lastName = lastName;
    }

    public String getdescription() {
        return description;
    }
    
    public void setdescription(String description) {
        this.description = description;
    }

    /*public String getRanking() {
        return ranking;
    }

    public void setRanking(String ranking) {
        this.ranking = ranking;
    }*/

	public String getpob() {
		return pob;
	}

	public void setpob(String pob) {
		this.pob = pob;
	}
}
