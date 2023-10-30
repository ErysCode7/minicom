import { LAYOUT_STATE } from '@/utils/constants';

type ProductsLayoutBtnProps = {
  layoutState: string;
  setLayoutState: (state: string) => void;
};

const ProductsLayoutBtn = ({ layoutState, setLayoutState }: ProductsLayoutBtnProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLayoutState(LAYOUT_STATE.horizontal)}
        type="button"
        className={`${
          LAYOUT_STATE.horizontal === layoutState
            ? 'bg-black border border-gray-500'
            : 'border-black '
        }  border rounded p-2 active:scale-95`}
      >
        <svg
          stroke="currentColor"
          fill={`${LAYOUT_STATE.horizontal === layoutState ? 'white' : 'currentColor'}`}
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
        </svg>
      </button>

      <button
        onClick={() => setLayoutState(LAYOUT_STATE.vertical)}
        type="button"
        className={`${
          LAYOUT_STATE.vertical === layoutState
            ? 'bg-black border border-gray-500'
            : 'border-gray-500'
        } border rounded p-2 active:scale-95`}
      >
        <svg
          stroke="currentColor"
          fill={`${LAYOUT_STATE.vertical === layoutState ? 'white' : 'currentColor'}`}
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ProductsLayoutBtn;
