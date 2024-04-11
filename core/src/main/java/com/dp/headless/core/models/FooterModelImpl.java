package com.dp.headless.core.models;

import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ExporterConstants;


@Model(
        adaptables = {Resource.class,SlingHttpServletRequest.class},
        adapters = FooterModel.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType = "dp-headless/components/footer"
        
        )
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
        
        )
public class FooterModelImpl implements FooterModel {
	
	
	
	
	
	
	
	
	@ValueMapValue
	private String connectwithustext;
	
	@ValueMapValue
	private String emailtext;
	
	
	@ValueMapValue
	private String copywritetext;
	
	@ChildResource
	private List<Resource> socialIcons;
	
	@ValueMapValue
	private String usefullinkstext;
	
	@ChildResource
	private List<Resource> usefullinks;
	
	@ValueMapValue
	private String productstext;
	
	@ChildResource
	private List<Resource> products;
	
	
	@Override
	public String getConnectwithustext() {
		// TODO Auto-generated method stub
		return connectwithustext;
	}

	@Override
	public String getEmailid() {
		// TODO Auto-generated method stub
		return emailtext;
	}

	@Override
	public String getCopywritetext() {
		// TODO Auto-generated method stub
		return copywritetext;
	}



	@Override
	public List<Resource> getSocialmediaicons() {
		// TODO Auto-generated method stub
		return socialIcons;
	}

	@Override
	public String getUsefulLinksText() {
		// TODO Auto-generated method stub
		return usefullinkstext;
	}

	@Override
	public List<Resource> getUsefulLinks() {
		// TODO Auto-generated method stub
		return usefullinks;
	}

	@Override
	public String getProductsText() {
		// TODO Auto-generated method stub
		return productstext;
	}

	@Override
	public List<Resource> getProducts() {
		// TODO Auto-generated method stub
		return products;
	}}
