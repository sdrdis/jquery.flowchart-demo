(function( $ ) {
 
    $.fn.flowchartRestrictions = function(restrictions) {
        this.on('linkCreate', function(el, linkId, linkData, returnHash) {
            var isLinkValid = false;
            var restriction;
            for (var i = 0; i < restrictions.length; i++) {
                restriction = restrictions[i];
                if (linkData.fromOperator == restriction.fromOperator &&
                    linkData.fromConnector == restriction.fromConnector &&
                    linkData.toOperator == restriction.toOperator &&
                    linkData.toConnector == restriction.toConnector) {
                    isLinkValid = true;
                    break;
                }
            }
            
            if (!isLinkValid) {
                returnHash.result = false;
            } else {
                if (typeof restriction.color != 'undefined') {
                    linkData.color = restriction.color;
                }
            }
        });
    };
 
}( jQuery ));