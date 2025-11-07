function ActionButtons({ onReset, onCalculate }) {
  return (
    <div className="button-div">
      <button className="btn-reset" onClick={onReset}>
        Reset
      </button>

      <button className="btn-calculate" onClick={onCalculate}>
        Calculate
      </button>
    </div>
  );
}

export default ActionButtons;
