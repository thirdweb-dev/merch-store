interface ConfirmationType {
  title: string;
}

export default function Confirmation({ title }: ConfirmationType) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <h3 className="font-bold text-lg">🎉 Your order is confirmed 🎉</h3>
      <p>{`Thanks for shopping! Your order ${title} hasn't shipped yet, but we'll let you know when it's done.`}</p>
    </div>
  );
}
