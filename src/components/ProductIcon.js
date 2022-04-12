function ProductIcon(props) {
  switch (props.type) {
    case "capsules":
      return <i className="las la-capsules text-red-600 text-8xl"></i>;
    case "tablets":
      return <i className="las la-tablets text-blue-600 text-8xl"></i>;
    case "equipment":
      return <i className="las la-stethoscope text-green-600 text-8xl"></i>;
    case "syrup":
      return (
        <i className="las la-prescription-bottle text-purple-600 text-8xl"></i>
      );
    default:
      return <i className="las la-syringe text-black text-8xl"></i>;
  }
}

export default ProductIcon;
