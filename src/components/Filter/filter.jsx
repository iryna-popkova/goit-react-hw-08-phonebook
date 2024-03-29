import { changeFilters } from 'redux/filterSlice';
import { FilterLabel, FilterInput, Wrapper } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiletrs } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFiletrs);

  return (
    <Wrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          name="filter"
          type="text"
          value={filters}
          onChange={event => dispatch(changeFilters(event.currentTarget.value))}
        />
      </FilterLabel>
    </Wrapper>
  );
};
