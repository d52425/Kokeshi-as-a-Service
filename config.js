// Google Analytics 設定
// このファイルは公開されますが、実際のIDは別途設定
window.GA_CONFIG = {
  // デフォルト値（無効）
  measurementId: null,
  
  // 設定関数
  setMeasurementId: function(id) {
    this.measurementId = id;
  }
};