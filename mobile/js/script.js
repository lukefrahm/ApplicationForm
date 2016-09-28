/***********************************************************************/
/*                     jQuery $(document).ready()                      */
/***********************************************************************/
$(document).ready(function () {
    /***********************************************************************/
    /*                        validation processing                        */
    /***********************************************************************/
    {
    // validate for applicantInfo form
    var validatorApplicantInfo = $("#applicantInformation").validate({
        rules: {
            lName: "required",
            fName: "required",
            mName: "required",
            date: "required",
            address: "required",
            city: "required",
            state: "required",
            zip: "required",
			phone: {
				required: true,
                digits: true,
                text: false
			},
            email: {
				required: true,
				email: true
			},
            dateAvailable: "required",
            ssn: {
				required: true
			},
            desiredSalary: "required",
            appliedPosition: "required",
            citizen: "required",
            worked: "required",
            felony: "required",
        }
    });
    
    // validate for education form
    var validatorEducation = $("#education").validate({
       rules: {
           highSchool: "required",
           hsAddress: "required",
           hsFrom: "required",
           hsTo: "required",
           hsDiploma: "required",
       },
        messages: {
            
        }
    });
    
    // validate for references form
    var validatorReferences = $("#references").validate({
       rules: {
           fullName: "required",
           relationship: "required",
           company: "required",
           phoneRef1: {
                required: true,
				phoneVerify: true
            },
           addressRef1: "required"
       },
        messages: {
            
        }
    });
    
    // validate for previousEmployment form
    var validatorPrevEmp = $("#previousEmployment").validate({
       rules: {
           company1: "required",
           phoneCo1: {
				required: true,
				phoneVerify: true
			},
           addressCo1: "required",
           supervisor1: "required",
           title1: "required",
           startSalary1: "required",
           endSalary1: "required",
           responsibilities1: "required",
           from1: "required",
           to1: "required",
           reasonLeave1: "required"           
       },
        messages: {
            
        }
    });
    
    // validate for military form
    var validatorMilitary = $("#military").validate({
       rules: {
           
       },
        messages: {
            
        }
    });
    
    // validate for signature form
    var validatorSignature = $("#signature").validate({
       rules: {
           signatureVerification: "required",
           dateVerification: "required"
       },
        messages: {
            
        }
    });
    }
    
    /***********************************************************************/
    /*                   cross-page formatting and setup                   */
    /***********************************************************************/
    {
    $(".hidden").hide();
    $(".date").datepicker();
    }
    
    /***********************************************************************/
    /*                          skip logic events                          */
    /***********************************************************************/
    {
    var citizenStatus = "";
    $("input[name='citizen']").click(function() {
        citizenStatus = $(this).val();
        if(citizenStatus == "No") {
            $("#authorized").fadeIn();
        } else if(citizenStatus == "Yes") {
            $("#authorized").fadeOut();
        }
    });
    
    var worked = "";
    $("input[name='worked']").click(function() {
        worked = $(this).val();
        if(worked == "Yes") {
            $("#workedWhen").fadeIn();
        } else if(worked == "No") {
            $("#workedWhen").fadeOut();
        }
    });
    
    var felony = "";
    $("input[name='felony']").click(function() {
        felony = $(this).val();
        if(felony == "Yes") {
            $("#felonyExplanation").fadeIn();
        } else if(felony == "No") {
            $("#felonyExplanation").fadeOut();
        }
    });
    
    var college = "";
    $("input[name='college']").click(function() {
        college = $(this).val();
        if(college == "Yes") {
            $("#collegeInfo").fadeIn();
        } else if(college == "No") {
            $("#collegeInfo").fadeOut();
        }
    });
    
    var other = "";
    $("input[name='other']").click(function() {
        other = $(this).val();
        if(other == "Yes") {
            $("#otherInfo").fadeIn();
        } else if(other == "No") {
            $("#otherInfo").fadeOut();
        }
    });
    
    var ref2 = "";
    $("input[name='ref2']").click(function() {
        ref2 = $(this).val();
        if(ref2 == "Yes") {
            $("#referencesTwo").fadeIn();
        } else if(ref2 == "No") {
            $("#referencesTwo").fadeOut();
        }
    });
    
     var ref3 = "";
    $("input[name='ref3']").click(function() {
        ref3 = $(this).val();
        if(ref3 == "Yes") {
            $("#referencesThree").fadeIn();
        } else if(ref3 == "No") {
            $("#referencesThree").fadeOut();
        }
    });
    
     var job2 = "";
    $("input[name='prevEmpTwo']").click(function() {
        job2 = $(this).val();
        if(job2 == "Yes") {
            $("#previousEmploymentTwo").fadeIn();
        } else if(job2 == "No") {
            $("#previousEmploymentTwo").fadeOut();
        }
    });
    
     var military = "";
    $("input[name='military']").click(function() {
        military = $(this).val();
        if(military == "Yes") {
            $("#military").fadeIn();
        } else if(military == "No") {
            $("#military").fadeOut();
        }
    });}
    
    /***********************************************************************/
    /*                       next button functionality                     */
    /***********************************************************************/
    {
    $("#applyButton").click(function() {
        $("#startPage").slideUp(500);
        $("#applicantInformation").slideDown(500);
    });
    
    
    $("#nextButtonInfo").click(function() {
        if(validateApplicantInfo(validatorApplicantInfo)){
            $("#applicantInformation").slideUp(500);
            $("#education").slideDown(500);
        }
    });
    
    $("#nextButtonEducation").click(function() {
        if(validateEducation(validatorEducation)){
            $("#education").slideUp(500);
            $("#references").slideDown(500);
        }
    });
    
    $("#nextButtonReferences").click(function() {
        if(validateReferences(validatorReferences)){
            $("#references").slideUp(500);
            $("#previousEmployment").slideDown(500);
         }
    });
    
    $("#nextButtonPrevEmp").click(function() {
        if(validatePrevEmp(validatorPrevEmp)){
            $("#previousEmployment").slideUp(500);
            $("#militaryService").slideDown(500);
        }
    });
    
    $("#nextButtonMilitary").click(function() {
        if(validateMilitary(validatorMilitary)) {
            $("#militaryService").slideUp(500);
            $("#signature").slideDown(500);
        }
    });
    
    $("#nextButtonSignature").click(function() {
        if(validateSignature(validatorSignature)){
            $("#signature").slideUp(500);
            $("#submission").slideDown(500);
        }
    });
    
    $("#returnButton").click(function() {
        $("#submission").slideUp(500);
        $("#startPage").slideDown(500);
    });
    }
    
    /***********************************************************************/
    /*                      back button functionality                      */
    /***********************************************************************/
    {
        /* 
         * NOTE: These do not contain verification for a reason:
         * If the user is trying to go back, no harm will be done.
         * In order to submit the form, the user will havbe to validate.
         * In order to promote usability, users are allowed to go back
         * to alter data without having to finalize their current page.
         * Going back on the first page submits a reset call and exits.
         */
    $("#backButtonInfo").click(function() {
        // if user wants to go back to the start page, reset the form
        $('#dialog-confirm').addClass('ui-button-text-only').css('color',"black");
        $("#dialog-confirm").dialog({
            resizable: false,
            height:180,
            width: 400,
            modal: true,
            buttons: {
                "Reset": function() {
                    $(this).dialog("close");
                    location.reload();
                },
                Cancel: function() {
                    $(this).dialog("close");
                }
            }
        });
    });
    
    $("#backButtonEducation").click(function() {
        $("#education").slideUp(500);
        $("#applicantInformation").slideDown(500);
    });
    
    $("#backButtonReferences").click(function() {
        $("#references").slideUp(500);
        $("#education").slideDown(500);
    });
    
    $("#backButtonPrevEmp").click(function() {
        $("#previousEmployment").slideUp(500);
        $("#references").slideDown(500);
    });
    
    $("#backButtonMilitary").click(function() {
        $("#militaryService").slideUp(500);
        $("#previousEmployment").slideDown(500);
    });
    
    $("#backButtonSignature").click(function() {
        $("#signature").slideUp(500);
        $("#militaryService").slideDown(500);
    });
    }
});

/***********************************************************************/
/*                              Functions                              */
/***********************************************************************/
{
function validateApplicantInfo(validatorApplicantInfo) {
	var allValid = true;
	if (!validatorApplicantInfo.element('#fName')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#mName')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#lName')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#date')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#email')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#phone')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#address')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#city')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#state')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#zip')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#dateAvailable')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#ssn')) {
		allValid = false;
	}
	if (!validatorApplicantInfo.element('#salary')) {
		allValid = false;
    }
    
	return allValid;
}

function validateEducation(validatorEducation) {
    var allValid = true;
    if (!validatorEducation.element('#highSchool')) {
		allValid = false;
	}
	if (!validatorEducation.element('#hsAddress')) {
		allValid = false;
	}
	if (!validatorEducation.element('#hsFrom')) {
		allValid = false;
	}
	if (!validatorEducation.element('#hsTo')) {
		allValid = false;
	}
	if (!validatorEducation.element('#hsDiploma')) {
		allValid = false;
	}
    return allValid;
}

function validateReferences(validatorReferences) {
    var allValid = true;
    if (!validatorReferences.element("#fullName")){
        allValid = false;
    }
    if (!validatorReferences.element("#relationship")){
        allValid = false;
    }
    if (!validatorReferences.element("#company")){
        allValid = false;
    }
    if (!validatorReferences.element("#phoneRef1")){
        allValid = false;
    }
    if (!validatorReferences.element("#addressRef1")){
        allValid = false;
    }
    return allValid;
}

function validatePrevEmp(validatorPrevEmp) {
    var allValid = true;
    if (!validatorPrevEmp.element("#company1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#phoneCo1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#addressCo1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#supervisor1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#title1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#startSalary1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#endSalary1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#responsibilities1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#from1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#to1")){
        allValid = false;
    }
    if (!validatorPrevEmp.element("#reasonLeave1")){
        allValid = false;
    }
    return allValid;
}

function validateMilitary(validatorMilitary) {
    var allValid = true;
    return allValid;
}

function validateSignature(validatorSignature) {
    var allValid = true;
    if (!validatorSignature.element("#signatureVerification")){
        allValid = false;
    }
    if (!validatorSignature.element("#dateVerification")){
        allValid = false;
    }
    return allValid;
}
}