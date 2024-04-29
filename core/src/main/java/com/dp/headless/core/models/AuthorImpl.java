package com.dp.headless.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class,
		adapters = {Author.class,ComponentExporter.class},
		resourceType=AuthorImpl.RESOURCE_TYPE,
		defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name=ExporterConstants.SLING_MODEL_EXPORTER_NAME,extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class AuthorImpl implements Author
{
	
	@ValueMapValue
	private String firstname;
	
	@ValueMapValue
	private String lastname;
	
	@ValueMapValue
	private boolean professor;
	
	static final String RESOURCE_TYPE="dp-headless/components/author";
	
	
	

	@Override
	public String getFirstName() {
		// TODO Auto-generated method stub
		return firstname;
	}

	@Override
	public String getLastName() {
		// TODO Auto-generated method stub
		return lastname;
	}

	@Override
	public boolean getIsProfessor() {
		// TODO Auto-generated method stub
		return professor;
	}
	
	@Override
	public String getExportedType() {
		// TODO Auto-generated method stub
		return AuthorImpl.RESOURCE_TYPE;
	}
}