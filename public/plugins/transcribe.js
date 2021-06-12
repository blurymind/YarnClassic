export var Transcribe = function({
  app,
  createButton,
  addSettingsItem,
  getPluginStore,
  onYarnEditorOpen,
  onYarnInPreviewMode,
  onYarnSavedNode,
  onLoad,
}) {
  const self = this;
  this.name = 'Transcribe';

  // Add editor buttons
  onYarnEditorOpen(() => {});
};
