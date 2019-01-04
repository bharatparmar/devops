<?php

class Standard_action_Generic_9f338a38b26f863e57c160413ce2dc5457da97c5 extends \TYPO3Fluid\Fluid\Core\Compiler\AbstractCompiledTemplate {

public function getLayoutName(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this; 
return (string) 'Default';
}
public function hasLayout() {
return TRUE;
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
));
}

/**
 * section Main
 */
public function section_62bce9422ff2d14f69ab80a154510232fc8a9afd(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output0 = '';

$output0 .= '

	';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\CommentViewHelper
$renderChildrenClosure2 = function() use ($renderingContext, $self) {
return 'This templates is used to provide nessesary functionality for external processed content and could be used across multiple sources, for example the frontend login content element.';
};
$arguments1 = array();

$output0 .= NULL;

$output0 .= '
	';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\IfViewHelper
$renderChildrenClosure4 = function() use ($renderingContext, $self) {
$output16 = '';

$output16 .= '
		';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\ThenViewHelper
$renderChildrenClosure18 = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\Format\RawViewHelper
$renderChildrenClosure20 = function() use ($renderingContext, $self) {
$array21 = array (
);return $renderingContext->getVariableProvider()->getByPath('content', $array21);
};
$arguments19 = array();
$arguments19['value'] = NULL;
return isset($arguments19['value']) ? $arguments19['value'] : $renderChildrenClosure20();
};
$arguments17 = array();

$output16 .= '';

$output16 .= '
		';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\ElseViewHelper
$renderChildrenClosure23 = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure25 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments24 = array();
$arguments24['data'] = NULL;
$arguments24['typoscriptObjectPath'] = NULL;
$arguments24['currentValueKey'] = NULL;
$arguments24['table'] = '';
$output26 = '';

$output26 .= 'tt_content.';
$array27 = array (
);
$output26 .= $renderingContext->getVariableProvider()->getByPath('data.CType', $array27);

$output26 .= '.20';
$arguments24['typoscriptObjectPath'] = $output26;
$array28 = array (
);$arguments24['data'] = $renderingContext->getVariableProvider()->getByPath('data', $array28);
$arguments24['table'] = 'tt_content';
$renderChildrenClosure25 = ($arguments24['data'] !== null) ? function() use ($arguments24) { return $arguments24['data']; } : $renderChildrenClosure25;return TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments24, $renderChildrenClosure25, $renderingContext);
};
$arguments22 = array();
$arguments22['if'] = NULL;

$output16 .= '';

$output16 .= '
	';
return $output16;
};
$arguments3 = array();
$arguments3['then'] = NULL;
$arguments3['else'] = NULL;
$arguments3['condition'] = false;
// Rendering Boolean node
// Rendering Array
$array13 = array();
$array14 = array (
);$array13['0'] = $renderingContext->getVariableProvider()->getByPath('content', $array14);

$expression15 = function($context) {return TYPO3Fluid\Fluid\Core\Parser\BooleanParser::convertNodeToBoolean($context["node0"]);};
$arguments3['condition'] = TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::convertToBoolean(
					$expression15(
						TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::gatherContext($renderingContext, $array13)
					),
					$renderingContext
				);
$arguments3['__thenClosure'] = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\Format\RawViewHelper
$renderChildrenClosure6 = function() use ($renderingContext, $self) {
$array7 = array (
);return $renderingContext->getVariableProvider()->getByPath('content', $array7);
};
$arguments5 = array();
$arguments5['value'] = NULL;
return isset($arguments5['value']) ? $arguments5['value'] : $renderChildrenClosure6();
};
$arguments3['__elseClosures'][] = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure9 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments8 = array();
$arguments8['data'] = NULL;
$arguments8['typoscriptObjectPath'] = NULL;
$arguments8['currentValueKey'] = NULL;
$arguments8['table'] = '';
$output10 = '';

$output10 .= 'tt_content.';
$array11 = array (
);
$output10 .= $renderingContext->getVariableProvider()->getByPath('data.CType', $array11);

$output10 .= '.20';
$arguments8['typoscriptObjectPath'] = $output10;
$array12 = array (
);$arguments8['data'] = $renderingContext->getVariableProvider()->getByPath('data', $array12);
$arguments8['table'] = 'tt_content';
$renderChildrenClosure9 = ($arguments8['data'] !== null) ? function() use ($arguments8) { return $arguments8['data']; } : $renderChildrenClosure9;return TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments8, $renderChildrenClosure9, $renderingContext);
};

$output0 .= TYPO3Fluid\Fluid\ViewHelpers\IfViewHelper::renderStatic($arguments3, $renderChildrenClosure4, $renderingContext);

$output0 .= '

';

return $output0;
}
/**
 * Main Render function
 */
public function render(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output29 = '';

$output29 .= '
';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\LayoutViewHelper
$renderChildrenClosure31 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments30 = array();
$arguments30['name'] = NULL;
$arguments30['name'] = 'Default';

$output29 .= call_user_func_array( function ($var) { return (is_string($var) || (is_object($var) && method_exists($var, '__toString')) ? htmlspecialchars((string) $var, ENT_QUOTES) : $var); }, [NULL]);

$output29 .= '
';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\SectionViewHelper
$renderChildrenClosure33 = function() use ($renderingContext, $self) {
$output34 = '';

$output34 .= '

	';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\CommentViewHelper
$renderChildrenClosure36 = function() use ($renderingContext, $self) {
return 'This templates is used to provide nessesary functionality for external processed content and could be used across multiple sources, for example the frontend login content element.';
};
$arguments35 = array();

$output34 .= NULL;

$output34 .= '
	';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\IfViewHelper
$renderChildrenClosure38 = function() use ($renderingContext, $self) {
$output50 = '';

$output50 .= '
		';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\ThenViewHelper
$renderChildrenClosure52 = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\Format\RawViewHelper
$renderChildrenClosure54 = function() use ($renderingContext, $self) {
$array55 = array (
);return $renderingContext->getVariableProvider()->getByPath('content', $array55);
};
$arguments53 = array();
$arguments53['value'] = NULL;
return isset($arguments53['value']) ? $arguments53['value'] : $renderChildrenClosure54();
};
$arguments51 = array();

$output50 .= '';

$output50 .= '
		';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\ElseViewHelper
$renderChildrenClosure57 = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure59 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments58 = array();
$arguments58['data'] = NULL;
$arguments58['typoscriptObjectPath'] = NULL;
$arguments58['currentValueKey'] = NULL;
$arguments58['table'] = '';
$output60 = '';

$output60 .= 'tt_content.';
$array61 = array (
);
$output60 .= $renderingContext->getVariableProvider()->getByPath('data.CType', $array61);

$output60 .= '.20';
$arguments58['typoscriptObjectPath'] = $output60;
$array62 = array (
);$arguments58['data'] = $renderingContext->getVariableProvider()->getByPath('data', $array62);
$arguments58['table'] = 'tt_content';
$renderChildrenClosure59 = ($arguments58['data'] !== null) ? function() use ($arguments58) { return $arguments58['data']; } : $renderChildrenClosure59;return TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments58, $renderChildrenClosure59, $renderingContext);
};
$arguments56 = array();
$arguments56['if'] = NULL;

$output50 .= '';

$output50 .= '
	';
return $output50;
};
$arguments37 = array();
$arguments37['then'] = NULL;
$arguments37['else'] = NULL;
$arguments37['condition'] = false;
// Rendering Boolean node
// Rendering Array
$array47 = array();
$array48 = array (
);$array47['0'] = $renderingContext->getVariableProvider()->getByPath('content', $array48);

$expression49 = function($context) {return TYPO3Fluid\Fluid\Core\Parser\BooleanParser::convertNodeToBoolean($context["node0"]);};
$arguments37['condition'] = TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::convertToBoolean(
					$expression49(
						TYPO3Fluid\Fluid\Core\Parser\SyntaxTree\BooleanNode::gatherContext($renderingContext, $array47)
					),
					$renderingContext
				);
$arguments37['__thenClosure'] = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\Format\RawViewHelper
$renderChildrenClosure40 = function() use ($renderingContext, $self) {
$array41 = array (
);return $renderingContext->getVariableProvider()->getByPath('content', $array41);
};
$arguments39 = array();
$arguments39['value'] = NULL;
return isset($arguments39['value']) ? $arguments39['value'] : $renderChildrenClosure40();
};
$arguments37['__elseClosures'][] = function() use ($renderingContext, $self) {
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure43 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments42 = array();
$arguments42['data'] = NULL;
$arguments42['typoscriptObjectPath'] = NULL;
$arguments42['currentValueKey'] = NULL;
$arguments42['table'] = '';
$output44 = '';

$output44 .= 'tt_content.';
$array45 = array (
);
$output44 .= $renderingContext->getVariableProvider()->getByPath('data.CType', $array45);

$output44 .= '.20';
$arguments42['typoscriptObjectPath'] = $output44;
$array46 = array (
);$arguments42['data'] = $renderingContext->getVariableProvider()->getByPath('data', $array46);
$arguments42['table'] = 'tt_content';
$renderChildrenClosure43 = ($arguments42['data'] !== null) ? function() use ($arguments42) { return $arguments42['data']; } : $renderChildrenClosure43;return TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments42, $renderChildrenClosure43, $renderingContext);
};

$output34 .= TYPO3Fluid\Fluid\ViewHelpers\IfViewHelper::renderStatic($arguments37, $renderChildrenClosure38, $renderingContext);

$output34 .= '

';
return $output34;
};
$arguments32 = array();
$arguments32['name'] = NULL;
$arguments32['name'] = 'Main';

$output29 .= NULL;

$output29 .= '

';

return $output29;
}


}
#