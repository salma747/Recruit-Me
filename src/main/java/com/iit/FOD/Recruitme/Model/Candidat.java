package com.iit.FOD.Recruitme.Model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(indexName="PFA-Project",type="candidat",shards=2)
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Candidat {
	@Id
	private String id;
	private String firstname;
	private String lastname;
	private Date birthdate;
	private String qualification;

}
