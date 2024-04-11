package com.dp.headless.core.models;

import java.util.List;
 
import org.apache.sling.api.resource.Resource;
 
public interface ImageCardModel {
   
   
    public String getImageCardText();
   
    public List<Resource> getImages();
   
   
 
}