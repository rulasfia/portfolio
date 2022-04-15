import { formatSlug } from '../../utils/formatString';
import Button from '../atoms/Button';
import LinkTo from '../atoms/LinkTo';

interface Props {
  tags: string[];
}

export default function Tags({ tags }: Props) {
  return (
    <div className="mt-4 flex flex-row gap-4">
      {tags.map((item) => (
        <LinkTo to={formatSlug(item)} key={item} className="">
          <Button tags>{item}</Button>
        </LinkTo>
      ))}
    </div>
  );
}
