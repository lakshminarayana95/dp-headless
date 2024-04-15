package com.dp.headless.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.dp.headless.core.models.HeaderModel;

import org.apache.sling.models.annotations.Exporter;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = { SlingHttpServletRequest.class }, adapters = { HeaderModelImpl.class,
        ComponentExporter.class
}, resourceType = "vation-headless/components/header")
@Exporter(name = "jackson", extensions = "json")
public class HeaderModelImpl implements HeaderModel {

    @ChildResource(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Resource menuIconItems;

    @SlingObject
    private Resource resource;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mainHeading;

    @ChildResource(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Resource menuItems;

    @ChildResource(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Resource titles;

    public Resource getMenuIconItems() {
        return menuIconItems;
    }

    @Override
    public String getMainHeading() {
        return mainHeading;
    }

    public Resource getMenuItems() {
        return menuItems;
    }

    public Resource getTitles() {
        return titles;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}