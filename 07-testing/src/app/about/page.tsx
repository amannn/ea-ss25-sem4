import ExpandableContent from '@/components/ExpandableContent';

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <ExpandableContent initialExpanded={false} showLabel="Show the content">
        <p>Hey!</p>
      </ExpandableContent>
    </div>
  );
}
