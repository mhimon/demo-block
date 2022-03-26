/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		title,
		content,
		image,
		colors
	} = attributes;

	return (
		<>
			<div {...useBlockProps.save()}>
				<div
					className="info-box"
					style={{
						'--db-title-color': colors.title ? colors.title : '',
						'--db-content-color': colors.content ? colors.content : '',
					}}
				>
					<div className="info-box__img">
						{
								image ? (
								<>
									<img src={ image } alt="" className="" />
								</>
							) : (
								<img src="https://ultradevs.com/wp-content/themes/ultraDevs/assets/images/man.svg" alt="" className="" />
							)
						}
					</div>
					<h3 className="info-box__title">
						{ title }
					</h3>
					<RichText.Content
						tagName="p"
						className="info-box__desc"
						value={ content }
					/>
				</div>
			</div>
		</>
	);
}
