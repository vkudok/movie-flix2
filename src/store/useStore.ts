import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
