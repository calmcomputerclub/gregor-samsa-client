import CardPage from "@components/card-page";

export default function CardReadPage() {
  return (
    <CardPage
      card={{
        title: "Title",
        content: "Content",
      }}
      pageType="read"
    />
  );
}
