package com.dp.headless.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface Author extends ComponentExporter
{
	String getFirstName();
	String getLastName();
	boolean getIsProfessor();
}