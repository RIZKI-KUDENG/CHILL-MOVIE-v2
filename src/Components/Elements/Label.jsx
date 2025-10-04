const Label = (props) => {
    const {htmlfor, children} = props;
    return (
        <label htmlFor={htmlfor} className="text-sm text-gray-200">
              {children}
            </label>
    )
}
export default Label;