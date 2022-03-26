import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Button,
	ColorPicker
} from '@wordpress/components';

import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const {
		title,
		content,
		image,
		colors
	} = attributes;

	console.log('====================================');
	console.log(colors);
	console.log('====================================');

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Content', 'demo-block' )}>
					<TextControl
						label={ __( 'Title', 'demo-block' ) }
						value={ title }
						onChange={
							( title ) => setAttributes( { title } )
						}
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( { image: media.url } )
							}
							value={ image }
							render={ ( { open } ) => {
								return (
									<>
										{
											image ? (
												<>
												<img src={ image } alt="" className="" />
												<Button
													onClick={ () => {
														setAttributes({
															image: ''
														})
													} }
												>
													Remove
												</Button>
												</>
											) : (
												<Button onClick={ open }>Open Media Library</Button>
											)
										}
									</>
								);
							} }
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title={ __( 'Style', 'demo-block' )} initialOpen={ false }>
					<ColorPicker
						color = { colors.title }
						onChange = {
							( color ) => { setAttributes( {
								colors: {
									...colors,
									title: color
								}
							} ) }
						}
					/>
					<ColorPicker
						color = { colors.content }
						onChange = {
							( color ) => { setAttributes( {
								colors: {
									...colors,
									content: color
								}
							} ) }
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
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
								<img src={ image } alt="" className="" />
							) : (
								<img src="https://ultradevs.com/wp-content/themes/ultraDevs/assets/images/man.svg" alt="" className="" />
							)
						}
					</div>
					<h3 className="info-box__title">
						{ title }
					</h3>
					<RichText
						tagName="p"
						value={ content }
						className="info-box__desc"
						onChange={
							(value) => setAttributes(
								{
									content: value
								}
							)
						}
					/>
				</div>
			</div>
		</>
	);
}
