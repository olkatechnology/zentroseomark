import { useState } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Check, Plus, Trash2 } from "lucide-react";
import { toolContent } from "@/data/tool-content";

type SchemaType = "Article" | "FAQ" | "Product" | "LocalBusiness" | "HowTo" | "Event";

interface FAQItem { question: string; answer: string }
interface HowToStep { name: string; text: string }

const SchemaMarkupGenerator = () => {
  const [schemaType, setSchemaType] = useState<SchemaType>("Article");
  const [copied, setCopied] = useState(false);

  // Article fields
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [articleDate, setArticleDate] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [articlePublisher, setArticlePublisher] = useState("");

  // FAQ fields
  const [faqItems, setFaqItems] = useState<FAQItem[]>([{ question: "", answer: "" }]);

  // Product fields
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCurrency, setProductCurrency] = useState("USD");
  const [productAvailability, setProductAvailability] = useState("InStock");
  const [productBrand, setProductBrand] = useState("");

  // LocalBusiness fields
  const [bizName, setBizName] = useState("");
  const [bizType, setBizType] = useState("LocalBusiness");
  const [bizAddress, setBizAddress] = useState("");
  const [bizCity, setBizCity] = useState("");
  const [bizState, setBizState] = useState("");
  const [bizZip, setBizZip] = useState("");
  const [bizCountry, setBizCountry] = useState("");
  const [bizPhone, setBizPhone] = useState("");
  const [bizUrl, setBizUrl] = useState("");

  // HowTo fields
  const [howToName, setHowToName] = useState("");
  const [howToDescription, setHowToDescription] = useState("");
  const [howToSteps, setHowToSteps] = useState<HowToStep[]>([{ name: "", text: "" }]);

  // Event fields
  const [eventName, setEventName] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventUrl, setEventUrl] = useState("");

  const generateSchema = (): string => {
    let schema: Record<string, unknown> = {};

    switch (schemaType) {
      case "Article":
        schema = {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: articleTitle,
          author: { "@type": "Person", name: articleAuthor },
          datePublished: articleDate,
          image: articleImage || undefined,
          description: articleDescription,
          publisher: articlePublisher ? { "@type": "Organization", name: articlePublisher } : undefined,
        };
        break;
      case "FAQ":
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.filter(i => i.question && i.answer).map(i => ({
            "@type": "Question",
            name: i.question,
            acceptedAnswer: { "@type": "Answer", text: i.answer },
          })),
        };
        break;
      case "Product":
        schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          name: productName,
          description: productDescription,
          image: productImage || undefined,
          brand: productBrand ? { "@type": "Brand", name: productBrand } : undefined,
          offers: {
            "@type": "Offer",
            price: productPrice,
            priceCurrency: productCurrency,
            availability: `https://schema.org/${productAvailability}`,
          },
        };
        break;
      case "LocalBusiness":
        schema = {
          "@context": "https://schema.org",
          "@type": bizType,
          name: bizName,
          telephone: bizPhone || undefined,
          url: bizUrl || undefined,
          address: {
            "@type": "PostalAddress",
            streetAddress: bizAddress,
            addressLocality: bizCity,
            addressRegion: bizState,
            postalCode: bizZip,
            addressCountry: bizCountry,
          },
        };
        break;
      case "HowTo":
        schema = {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: howToName,
          description: howToDescription,
          step: howToSteps.filter(s => s.name && s.text).map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        };
        break;
      case "Event":
        schema = {
          "@context": "https://schema.org",
          "@type": "Event",
          name: eventName,
          startDate: eventStartDate,
          endDate: eventEndDate || undefined,
          location: eventLocation ? { "@type": "Place", name: eventLocation } : undefined,
          description: eventDescription,
          url: eventUrl || undefined,
        };
        break;
    }

    // Remove undefined values
    const clean = (obj: unknown): unknown => {
      if (Array.isArray(obj)) return obj.map(clean);
      if (obj && typeof obj === "object") {
        return Object.fromEntries(
          Object.entries(obj as Record<string, unknown>)
            .filter(([, v]) => v !== undefined && v !== "")
            .map(([k, v]) => [k, clean(v)])
        );
      }
      return obj;
    };

    return JSON.stringify(clean(schema), null, 2);
  };

  const output = generateSchema();

  const copyToClipboard = () => {
    const script = `<script type="application/ld+json">\n${output}\n</script>`;
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderFields = () => {
    switch (schemaType) {
      case "Article":
        return (
          <div className="space-y-3">
            <Input placeholder="Headline / Title" value={articleTitle} onChange={e => setArticleTitle(e.target.value)} />
            <Input placeholder="Author Name" value={articleAuthor} onChange={e => setArticleAuthor(e.target.value)} />
            <Input placeholder="Publisher Name" value={articlePublisher} onChange={e => setArticlePublisher(e.target.value)} />
            <Input type="date" placeholder="Date Published" value={articleDate} onChange={e => setArticleDate(e.target.value)} />
            <Input placeholder="Image URL (optional)" value={articleImage} onChange={e => setArticleImage(e.target.value)} />
            <Textarea placeholder="Description" value={articleDescription} onChange={e => setArticleDescription(e.target.value)} />
          </div>
        );
      case "FAQ":
        return (
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <Card key={i} className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Q&A #{i + 1}</span>
                  {faqItems.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => setFaqItems(faqItems.filter((_, j) => j !== i))}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <Input placeholder="Question" value={item.question} onChange={e => { const n = [...faqItems]; n[i].question = e.target.value; setFaqItems(n); }} />
                <Textarea placeholder="Answer" value={item.answer} onChange={e => { const n = [...faqItems]; n[i].answer = e.target.value; setFaqItems(n); }} />
              </Card>
            ))}
            <Button variant="outline" onClick={() => setFaqItems([...faqItems, { question: "", answer: "" }])} className="w-full">
              <Plus className="w-4 h-4 mr-1" /> Add Question
            </Button>
          </div>
        );
      case "Product":
        return (
          <div className="space-y-3">
            <Input placeholder="Product Name" value={productName} onChange={e => setProductName(e.target.value)} />
            <Textarea placeholder="Product Description" value={productDescription} onChange={e => setProductDescription(e.target.value)} />
            <Input placeholder="Brand" value={productBrand} onChange={e => setProductBrand(e.target.value)} />
            <Input placeholder="Image URL (optional)" value={productImage} onChange={e => setProductImage(e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Price" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
              <Select value={productCurrency} onValueChange={setProductCurrency}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR"].map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <Select value={productAvailability} onValueChange={setProductAvailability}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="InStock">In Stock</SelectItem>
                <SelectItem value="OutOfStock">Out of Stock</SelectItem>
                <SelectItem value="PreOrder">Pre-Order</SelectItem>
                <SelectItem value="Discontinued">Discontinued</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case "LocalBusiness":
        return (
          <div className="space-y-3">
            <Input placeholder="Business Name" value={bizName} onChange={e => setBizName(e.target.value)} />
            <Select value={bizType} onValueChange={setBizType}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {["LocalBusiness", "Restaurant", "Store", "MedicalBusiness", "LegalService", "FinancialService", "RealEstateAgent"].map(t => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Street Address" value={bizAddress} onChange={e => setBizAddress(e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="City" value={bizCity} onChange={e => setBizCity(e.target.value)} />
              <Input placeholder="State/Region" value={bizState} onChange={e => setBizState(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Zip/Postal Code" value={bizZip} onChange={e => setBizZip(e.target.value)} />
              <Input placeholder="Country" value={bizCountry} onChange={e => setBizCountry(e.target.value)} />
            </div>
            <Input placeholder="Phone (optional)" value={bizPhone} onChange={e => setBizPhone(e.target.value)} />
            <Input placeholder="Website URL (optional)" value={bizUrl} onChange={e => setBizUrl(e.target.value)} />
          </div>
        );
      case "HowTo":
        return (
          <div className="space-y-4">
            <Input placeholder="How-To Title" value={howToName} onChange={e => setHowToName(e.target.value)} />
            <Textarea placeholder="Description" value={howToDescription} onChange={e => setHowToDescription(e.target.value)} />
            {howToSteps.map((step, i) => (
              <Card key={i} className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Step {i + 1}</span>
                  {howToSteps.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => setHowToSteps(howToSteps.filter((_, j) => j !== i))}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <Input placeholder="Step Name" value={step.name} onChange={e => { const n = [...howToSteps]; n[i].name = e.target.value; setHowToSteps(n); }} />
                <Textarea placeholder="Step Instructions" value={step.text} onChange={e => { const n = [...howToSteps]; n[i].text = e.target.value; setHowToSteps(n); }} />
              </Card>
            ))}
            <Button variant="outline" onClick={() => setHowToSteps([...howToSteps, { name: "", text: "" }])} className="w-full">
              <Plus className="w-4 h-4 mr-1" /> Add Step
            </Button>
          </div>
        );
      case "Event":
        return (
          <div className="space-y-3">
            <Input placeholder="Event Name" value={eventName} onChange={e => setEventName(e.target.value)} />
            <Textarea placeholder="Event Description" value={eventDescription} onChange={e => setEventDescription(e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Start Date</label>
                <Input type="datetime-local" value={eventStartDate} onChange={e => setEventStartDate(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">End Date (optional)</label>
                <Input type="datetime-local" value={eventEndDate} onChange={e => setEventEndDate(e.target.value)} />
              </div>
            </div>
            <Input placeholder="Location / Venue Name" value={eventLocation} onChange={e => setEventLocation(e.target.value)} />
            <Input placeholder="Event URL (optional)" value={eventUrl} onChange={e => setEventUrl(e.target.value)} />
          </div>
        );
    }
  };

  const content = toolContent["schema-markup-generator"];

  return (
    <ToolLayout
      toolName="Schema Markup Generator (JSON-LD)"
      toolDescription="Generate structured data markup for Articles, FAQs, Products, Local Businesses, How-Tos, and Events."
      metaTitle="Schema Markup Generator (JSON-LD) – Free SEO Tool | ZentroSEO"
      metaDescription="Free JSON-LD schema markup generator. Create structured data for Articles, FAQs, Products, Local Businesses, How-To guides, and Events to boost rich results."
      canonicalPath="/resources/seo-toolkit/schema-markup-generator/"
      howToUse={content.howToUse}
      whatIs={content.whatIs}
      whatIsTitle={content.whatIsTitle}
      whyMatters={content.whyMatters}
      whyMattersTitle={content.whyMattersTitle}
      faqs={content.faqs}
      relatedTools={content.relatedTools}
      showCTA
      ctaHeadline={content.ctaHeadline}
      ctaSubtitle={content.ctaSubtitle}
    >
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Schema Type</label>
          <Select value={schemaType} onValueChange={v => setSchemaType(v as SchemaType)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Article">Article</SelectItem>
              <SelectItem value="FAQ">FAQ Page</SelectItem>
              <SelectItem value="Product">Product</SelectItem>
              <SelectItem value="LocalBusiness">Local Business</SelectItem>
              <SelectItem value="HowTo">How-To</SelectItem>
              <SelectItem value="Event">Event</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {renderFields()}

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-lg font-bold">Generated JSON-LD</h2>
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
              {copied ? "Copied!" : "Copy Script Tag"}
            </Button>
          </div>
          <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap break-all">
            {`<script type="application/ld+json">\n${output}\n</script>`}
          </pre>
        </div>
      </div>
    </ToolLayout>
  );
};

export default SchemaMarkupGenerator;
