export const customStyles = {
    control: (base: any, state: any) => ({
        ...base,
        background: "inherit",
        fontSize: "16px",
        color: "white",
        minWidth: "150px",
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        borderColor: "gray",
        transition: ".2s ease-out",
        "&:hover": {
            borderColor: state.isFocused ? "gray" : "lightgray"
        }
    }),
    menu: (base: any) => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
    }),
    menuList: (base: any) => ({
        ...base,
        fontSize: "16px",
        padding: 0
    })
};