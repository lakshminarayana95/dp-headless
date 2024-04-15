package com.dp.headless.core.models;

import com.adobe.cq.export.json.ComponentExporter;

import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface HeaderModel extends ComponentExporter {
    String getMainHeading();
}
