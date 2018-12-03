//spec.js

describe('ADF Demo App', function() {

	it('Access to http://qaexercise.envalfresco.com/settings and verify title', function() {
		var URL ='http://qaexercise.envalfresco.com/settings';
		browser.get(URL)
		expect(browser.getTitle()).toEqual('Welcome - Alfresco ADF Application');
		
	});


	it('Change Provider to ECM', function() {
		var selectDrop=element(by.xpath(".//*[@id='adf-provider-selector']/div/div[1]"));
		var selectEle=element(by.xpath(".//*[@id='mat-option-1']/span"));
		selectDrop.click();
		selectEle.click();

	});

	it('Click Apply', function() {
		var btnApply=element(by.xpath(".//*[@id='host-button']"));
		btnApply.click();
		browser.driver.sleep(3000);
	});

	it('Navigate to http://qaexercise.envalfresco.com/login and verify title', function() {
		var URL ='http://qaexercise.envalfresco.com/login';
		browser.get(URL)
		expect(browser.getTitle()).toEqual('Welcome - Alfresco ADF Application');
	});

	it('Insert Username and Password and click Login', function() {
		var txtUserNameValue ='guest@example.com';
		var txtPasswordValue ='Password';
		var txtUserNameEle=element(by.id('username'));
		var txtPasswordEle =element(by.id('password'));
		var btnLoginEle =element(by.id('login-button'));
		txtUserNameEle.sendKeys(txtUserNameValue);
		txtPasswordEle.sendKeys(txtPasswordValue);
		btnLoginEle.click();		
		browser.driver.sleep(10000);
	});

	it('Navigate to http://qaexercise.envalfresco.com/files and verify title', function() {
		var URL ='http://qaexercise.envalfresco.com/files';
		browser.get(URL)
		browser.driver.sleep(10000);
		expect(browser.getTitle()).toEqual('Welcome - Alfresco ADF Application');
	});

	it('Create new folder', function() {
		var newFolderName="magemello1";
		var iconCreateNewFolder=element(by.xpath(".//*[@id='document-list-container']/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]"));
		var txtNewFolderName=element(by.xpath(".//*[@id='mat-dialog-0']/adf-folder-dialog/mat-dialog-content/form/mat-form-field[1]/div/div[1]/div"));
		var dlgNewFolder=element(by.xpath(".//*[@id='mat-dialog-title-0']"));
		var btnCreate=element(by.xpath("//*[@id='adf-folder-create-button']"));
		var lnkcreate=element(by.xpath(".//*[@id='document-list-container']/adf-upload-drag-area/div/adf-document-list/adf-datatable/div/div[1]/div/div[7]"));
		var lblFolder=element(by.xpath(".//*[@id='document-list-container']/adf-upload-drag-area/div/adf-document-list/adf-datatable/div/div[2]/div[1]/div[2]/div/div/adf-datatable-cell/span"));
		iconCreateNewFolder.click();
		expect(dlgNewFolder.getText()).toEqual('New folder');
		txtNewFolderName.sendKeys(newFolderName);
		btnCreate.click();
		lnkcreate.click();
		lnkcreate.click();
	//	expect(lblFolder.gettext()).toEqual(newFolderName);
	});

	it('Create duplicate folder', function() {
		var newFolderName="magemello1";
		var iconCreateNewFolder=element(by.xpath(".//*[@id='document-list-container']/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]"));
		var txtNewFolderName=element(by.id('adf-folder-name-input'));
		var dlgNewFolder=element(by.xpath(".//*[@id='mat-dialog-title-0']"));
		var btnCreate=element(by.xpath("//*[@id='adf-folder-create-button']"));
		var lnkcreate=element(by.xpath(".//*[@id='document-list-container']/adf-upload-drag-area/div/adf-document-list/adf-datatable/div/div[1]/div/div[7]"));
		var lblFolder=element(by.xpath(".//*[@id='document-list-container']/adf-upload-drag-area/div/adf-document-list/adf-datatable/div/div[2]/div[1]/div[2]/div/div/adf-datatable-cell/span"));
		var lblDupFolder=element(by.xpath(".//*[@id='cdk-overlay-4']/snack-bar-container/simple-snack-bar/span"));
		var btnCancel=element(by.xpath("//*[@id='adf-folder-cancel-button']"));
		var lnkOptions=element(by.xpath(".//*[@id='action_menu_right_0']"));
		var lnkDelete=element(by.xpath(".//*[@id='cdk-overlay-5']/div/div/button[5]"));
		iconCreateNewFolder.click();
	//	expect(dlgNewFolder.getText()).toEqual('New folder');
		txtNewFolderName.sendKeys(newFolderName);
		btnCreate.click();
		//expect(lblDupFolder.gettext().toEqual("There's already a folder with this name. Try a different name."));
		btnCancel.click();
		lnkOptions.click();
		lnkDelete.click();
	});
});