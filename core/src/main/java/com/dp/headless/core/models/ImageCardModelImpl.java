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
 
@Model(adaptables = {Resource.class,SlingHttpServletRequest.class},
 
        adapters = ImageCardModelImpl.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType ="dp-headless/components/imagecard"
       
        )
        @Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
       
        )
                   
public class ImageCardModelImpl implements ImageCardModel {
   
   
   
    @ValueMapValue
    private String imagecardtext;
   
    @ChildResource
    private List<Resource> images;
 
    @Override
    public String getImageCardText() {
        // TODO Auto-generated method stub
        return imagecardtext;
    }
 
    @Override
    public List<Resource> getImages() {
        // TODO Auto-generated method stub
        return images;
    }
 
}
 