export var VarStore = function({
  app,
  createButton,
  setPluginStore,
  getPluginStore,
}) {
  this.localVariables = {};
  const self = this;

  // Build the interface here
  this.onload = () => {
    self.localVariables = getPluginStore(self);

    console.log(self.localVariables);
    this.onOpenDialog = async () => {
      const { value: formValues } = await Swal.fire({
        title: 'Multiple inputs',
        html: `<input id="swal-input1" class="swal2-input" value="${self.localVariables.fields[0]}"> 
          <input id="swal-input2" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
          ];
        },
      });

      console.log('FORM', formValues);
      if (formValues) {
        setPluginStore(self, 'fields', formValues);
      }
    };

    // create a button in the file menu
    const dialogButton = createButton(self, {
      name: 'Variables',
      attachTo: 'fileMenuDropdown',
      onClick: 'onOpenDialog',
    });

    console.log('yay', app.plugins);
    // create a dialog to use with the button
    // createDialog(self, { name: 'Variables' });
  };
};
