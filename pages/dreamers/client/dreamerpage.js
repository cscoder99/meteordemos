Template.dreamerpage.helpers({
	compensation:function() {
		if (this.able) {
			return "Able to provide compensation"
		}
		else {
			return "Unable to provide compensation"
		}
	}
	
})
document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};