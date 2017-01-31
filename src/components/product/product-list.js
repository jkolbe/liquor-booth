import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import {Card, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ChevronIcon from 'material-ui/svg-icons/navigation/chevron-right';

const ProductList = ({
	products
}) => (
	<div>
		{products.map((p) => (
			<Card key={p.id} className="product-card">
				<CardHeader
					className="product-card-header"
					title={p.name}
					subtitle={`${p.primary_category} | ${p.style} `}
					avatar={p.image_thumb_url} >					
				</CardHeader>

				<div className="product-card-link">
					<FlatButton
						containerElement={<Link to={`/product/${p.id}`} />}
						label="See full details"
						labelPosition="before"
						primary={true}
						icon={<ChevronIcon />}/>
				</div>
			</Card>
		))}
	</div>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;