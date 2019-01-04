<?php

class partial_header_dba173e7e3b5dae9023a8d7f2afb110069ef60b5 extends \TYPO3Fluid\Fluid\Core\Compiler\AbstractCompiledTemplate {

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
));
}

/**
 * Main Render function
 */
public function render(\TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface $renderingContext) {
$self = $this;
$output0 = '';

$output0 .= ' <header class="header">
    <div id="header">
            
            <div id="imprint"><a class="imprint" href="subpages/imprint.html">Impressum</a></div>
            <div id="banner"></div>
            <div id="banner_line">
                    ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure2 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments1 = array();
$arguments1['data'] = NULL;
$arguments1['typoscriptObjectPath'] = NULL;
$arguments1['currentValueKey'] = NULL;
$arguments1['table'] = '';
$arguments1['typoscriptObjectPath'] = 'lib.langmenu';
$renderChildrenClosure2 = ($arguments1['data'] !== null) ? function() use ($arguments1) { return $arguments1['data']; } : $renderChildrenClosure2;
$output0 .= TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments1, $renderChildrenClosure2, $renderingContext);

$output0 .= '
                <div id="KWbanner"></div>
            </div>
            
        </div>
 <!-- ';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\CommentViewHelper
$renderChildrenClosure4 = function() use ($renderingContext, $self) {
$output5 = '';

$output5 .= '
    <div class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-xs-7 left-top-header">
                    <ul class="links head-social">
                        <li><a href="https://twitter.com/BugeseraDistr/"><i class="fa fa-twiiter"></i></a></li>
                        <li><a href="https://www.facebook.com/DistrictBugesera/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.flickr.com/photos/bugeseradistrict"><i class="fa fa-flickr"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UC5EC5eZLlDR7_82QaKyCAYw/"><i class="fa fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/bugeseradistrict/"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-xs-5 right-top-header text-right">   
                    ';
// Rendering ViewHelper TYPO3Fluid\Fluid\ViewHelpers\CommentViewHelper
$renderChildrenClosure7 = function() use ($renderingContext, $self) {
$output8 = '';

$output8 .= ' 
                    ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure10 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments9 = array();
$arguments9['data'] = NULL;
$arguments9['typoscriptObjectPath'] = NULL;
$arguments9['currentValueKey'] = NULL;
$arguments9['table'] = '';
$arguments9['typoscriptObjectPath'] = 'lib.languageMenu';
$renderChildrenClosure10 = ($arguments9['data'] !== null) ? function() use ($arguments9) { return $arguments9['data']; } : $renderChildrenClosure10;
$output8 .= TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments9, $renderChildrenClosure10, $renderingContext);

$output8 .= '
                    <ul class="flag-box">
                        <li><a href="#"><img src="typo3conf/ext/site_config/Resources/Public/images/gb.png" alt="gb"></a></li>
                        <li><a href="#"><img src="typo3conf/ext/site_config/Resources/Public/images/fr.png" alt="fr"></a></li>
                        <li><a href="#"><img src="typo3conf/ext/site_config/Resources/Public/images/rw.png" alt="rw"></a></li>
                    </ul>
                    ';
return $output8;
};
$arguments6 = array();

$output5 .= NULL;

$output5 .= '
                </div>
            </div>
        </div>    
    </div>
    <div class="header-middle img_bg">
        <img src="typo3conf/ext/site_config/Resources/Public/images/bg.png">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 header-logo">
                    ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure12 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments11 = array();
$arguments11['data'] = NULL;
$arguments11['typoscriptObjectPath'] = NULL;
$arguments11['currentValueKey'] = NULL;
$arguments11['table'] = '';
$arguments11['typoscriptObjectPath'] = 'lib.logo2';
$renderChildrenClosure12 = ($arguments11['data'] !== null) ? function() use ($arguments11) { return $arguments11['data']; } : $renderChildrenClosure12;
$output5 .= TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments11, $renderChildrenClosure12, $renderingContext);

$output5 .= '
                </div>
                <div class="col-sm-4 mobile-col">
                    <div class="m-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="search-box">
                        <div class="search-form">
                            ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure14 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments13 = array();
$arguments13['data'] = NULL;
$arguments13['typoscriptObjectPath'] = NULL;
$arguments13['currentValueKey'] = NULL;
$arguments13['table'] = '';
$arguments13['typoscriptObjectPath'] = 'lib.search';
$renderChildrenClosure14 = ($arguments13['data'] !== null) ? function() use ($arguments13) { return $arguments13['data']; } : $renderChildrenClosure14;
$output5 .= TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments13, $renderChildrenClosure14, $renderingContext);

$output5 .= '
                        </div>  
                    </div>  
                </div>
            </div>
        </div>    
    </div>
    <div class="header-nav1" id="horiznav">   
        <div class="container"> 
                ';
// Rendering ViewHelper TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper
$renderChildrenClosure16 = function() use ($renderingContext, $self) {
return NULL;
};
$arguments15 = array();
$arguments15['data'] = NULL;
$arguments15['typoscriptObjectPath'] = NULL;
$arguments15['currentValueKey'] = NULL;
$arguments15['table'] = '';
$arguments15['typoscriptObjectPath'] = 'lib.mainmenu';
$renderChildrenClosure16 = ($arguments15['data'] !== null) ? function() use ($arguments15) { return $arguments15['data']; } : $renderChildrenClosure16;
$output5 .= TYPO3\CMS\Fluid\ViewHelpers\CObjectViewHelper::renderStatic($arguments15, $renderChildrenClosure16, $renderingContext);

$output5 .= '
        </div>
    </div>
';
return $output5;
};
$arguments3 = array();

$output0 .= NULL;

$output0 .= ' -->
</header>';

return $output0;
}


}
#