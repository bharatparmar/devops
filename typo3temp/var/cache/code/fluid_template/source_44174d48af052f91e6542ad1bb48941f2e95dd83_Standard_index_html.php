<?php

class source_44174d48af052f91e6542ad1bb48941f2e95dd83_Standard_index_html extends \TYPO3Fluid\Fluid\Core\Compiler\AbstractCompiledTemplate {

public function getLayoutName(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this; 
return (string) '';
}
public function hasLayout() {
return FALSE;
}
public function addCompiledNamespaces(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$renderingContext->getViewHelperResolver()->addNamespaces(array (
  'core' => 
  array (
    0 => 'TYPO3\\CMS\\Core\\ViewHelpers',
  ),
  'f' => 
  array (
    0 => 'TYPO3Fluid\\Fluid\\ViewHelpers',
    1 => 'TYPO3\\CMS\\Fluid\\ViewHelpers',
  ),
  'formvh' => 
  array (
    0 => 'TYPO3\\CMS\\Form\\ViewHelpers',
  ),
  'dce' => 
  array (
    0 => 'ArminVieweg\\Dce\\ViewHelpers',
  ),
));
}

/**
 * Main Render function
 */
public function render(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output0 = '';

$output0 .= '
<section id="content">
	<div class="main-slider-area">
		<div class="main-slider">
			';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\ForViewHelper
$renderChildrenClosure2 = function() use ($renderingContext, $self) {
$output6 = '';

$output6 .= '
				<div class="ms-slide">
					<div class="ms-item">
						';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\ImageViewHelper
$renderChildrenClosure8 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments7 = array();
$arguments7['additionalAttributes'] = NULL;
$arguments7['data'] = NULL;
$arguments7['class'] = NULL;
$arguments7['dir'] = NULL;
$arguments7['id'] = NULL;
$arguments7['lang'] = NULL;
$arguments7['style'] = NULL;
$arguments7['title'] = NULL;
$arguments7['accesskey'] = NULL;
$arguments7['tabindex'] = NULL;
$arguments7['onclick'] = NULL;
$arguments7['alt'] = NULL;
$arguments7['ismap'] = NULL;
$arguments7['longdesc'] = NULL;
$arguments7['usemap'] = NULL;
$arguments7['src'] = NULL;
$arguments7['treatIdAsReference'] = NULL;
$arguments7['image'] = NULL;
$arguments7['crop'] = NULL;
$arguments7['cropVariant'] = 'default';
$arguments7['width'] = NULL;
$arguments7['height'] = NULL;
$arguments7['minWidth'] = NULL;
$arguments7['minHeight'] = NULL;
$arguments7['maxWidth'] = NULL;
$arguments7['maxHeight'] = NULL;
$arguments7['absolute'] = false;
$array9 = array (
);$arguments7['src'] = $renderingContext->getVariableProvider()->getByPath('fileReference.uid', $array9);
$arguments7['alt'] = '';
// Rendering Boolean node
// Rendering Array
$array10 = array();
$array10['0'] = 1;

$expression11 = function($context) {return TYPO3Fluid\Fluid\Core\Parser\BooleanParser::convertNodeToBoolean($context["node0"]);};
$arguments7['treatIdAsReference'] = TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::convertToBoolean(
					$expression11(
						TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::gatherContext($renderingContext, $array10)
					),
					$renderingContext
				);

$output6 .= TYPO3\CMS\Fluid\ViewHelpers\ImageViewHelper::renderStatic($arguments7, $renderChildrenClosure8, $renderingContext);

$output6 .= '
					</div>
				</div>
			';
return $output6;
};
$arguments1 = array();
$arguments1['each'] = NULL;
$arguments1['as'] = NULL;
$arguments1['key'] = NULL;
$arguments1['reverse'] = false;
$arguments1['iteration'] = NULL;
// Rendering ViewHelper ArminVieweg\Dce\ViewHelpers\FalViewHelper
$renderChildrenClosure4 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments3 = array();
$arguments3['field'] = NULL;
$arguments3['contentObject'] = NULL;
$arguments3['localizedUid'] = true;
$arguments3['tableName'] = 'tt_content';
$arguments3['uid'] = 0;
$arguments3['field'] = 'img';
$array5 = array (
);$arguments3['contentObject'] = $renderingContext->getVariableProvider()->getByPath('contentObject', $array5);
$arguments1['each'] = ArminVieweg\Dce\ViewHelpers\FalViewHelper::renderStatic($arguments3, $renderChildrenClosure4, $renderingContext);
$arguments1['as'] = 'fileReference';
$arguments1['iteration'] = 'iterator';

$output0 .= TYPO3Fluid\Fluid\ViewHelpers\ForViewHelper::renderStatic($arguments1, $renderChildrenClosure2, $renderingContext);

$output0 .= '
		</div>
	</div>
</section> ';

return $output0;
}


}
#