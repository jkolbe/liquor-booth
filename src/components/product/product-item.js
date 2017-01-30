import React from 'react';

import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


export default function ProductItem({product}){ 

	const tableData = [
		{ property: 'Price', value: `$${product.price_in_cents/100}` },
		{ property: 'Package', value: product.package },
		{ property: 'Category', value: `${product.primary_category} | ${product.secondary_category}` },
		{ property: 'Producer', value: product.producer_name },
		{ property: 'Origin', value: product.origin },
		{ property: 'Alcohol content', value: `${product.alcohol_content/100}%` },
		{ property: 'Inventory count', value: product.inventory_count },
		{ property: 'Kosher', value: product.is_kosher ? 'Yes' : 'No' },	
	];

	return (
	<div>
		{console.log(product)}
		<Card>
			<CardHeader
				actAsExpander={true}
				showExpandableButton={true}/>
			<CardMedia overlay={
				<CardTitle 
					title={product.name} 
					subtitle={`${product.primary_category} | ${product.style}`}
				/>} >
    			<div style={{textAlign: 'center'}}>
    				<img className="product-image" src={product.image_url} alt={product.name}/>
    			</div>
    		</CardMedia>

			<CardText expandable={true}>

				<Table
					fixedHeader={true} >
					<TableHeader
						displaySelectAll={false}
            			adjustForCheckbox={false}
					>
						<TableRow>
							<TableHeaderColumn tooltip="Property">Property</TableHeaderColumn>
							<TableHeaderColumn tooltip="Value">Value</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
						displayRowCheckbox={false}>
					{tableData.map( (row, index) => (
						<TableRow key={index}>
							<TableRowColumn>{row.property}</TableRowColumn>
							<TableRowColumn>{row.value}</TableRowColumn>
						</TableRow>
					))}
					</TableBody>
				</Table>
			</CardText>
		</Card>
	</div>
	)
};
