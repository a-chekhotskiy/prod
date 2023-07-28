/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export function Counter() {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const { increment, decrement } = counterActions;

    return (
        <div>
            <div>
                <button data-testid="increment-btn" aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span data-testid="value">{count}</span>
                <button data-testid="decrement-btn" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
