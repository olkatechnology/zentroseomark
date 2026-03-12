import { useState, useCallback } from "react";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Plus, Trash2, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import ToolCTA from "@/components/tools/ToolCTA";

interface Rule {
  id: string;
  userAgent: string;
  disallow: string[];
  allow: string[];
}

const defaultRule = (): Rule => ({
  id: crypto.randomUUID(),
  userAgent: "*",
  disallow: ["/admin/", "/private/"],
  allow: ["/"],
});

const RobotsTxtGenerator = () => {
  const [rules, setRules] = useState<Rule[]>([defaultRule()]);
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [crawlDelay, setCrawlDelay] = useState("");
  const [addHostDirective, setAddHostDirective] = useState(false);
  const [hostUrl, setHostUrl] = useState("");

  const addRule = () => setRules((r) => [...r, { id: crypto.randomUUID(), userAgent: "*", disallow: [""], allow: [] }]);
  const removeRule = (id: string) => setRules((r) => r.filter((x) => x.id !== id));

  const updateRule = (id: string, field: keyof Rule, value: any) => {
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const addLine = (id: string, field: "disallow" | "allow") => {
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: [...r[field], ""] } : r)));
  };

  const updateLine = (id: string, field: "disallow" | "allow", idx: number, val: string) => {
    setRules((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, [field]: r[field].map((v, i) => (i === idx ? val : v)) } : r
      )
    );
  };

  const removeLine = (id: string, field: "disallow" | "allow", idx: number) => {
    setRules((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, [field]: r[field].filter((_, i) => i !== idx) } : r
      )
    );
  };

  const output = useCallback(() => {
    let txt = "";
    rules.forEach((r) => {
      txt += `User-agent: ${r.userAgent}\n`;
      r.disallow.forEach((d) => { if (d) txt += `Disallow: ${d}\n`; });
      r.allow.forEach((a) => { if (a) txt += `Allow: ${a}\n`; });
      if (crawlDelay) txt += `Crawl-delay: ${crawlDelay}\n`;
      txt += "\n";
    });
    if (sitemapUrl) txt += `Sitemap: ${sitemapUrl}\n`;
    if (addHostDirective && hostUrl) txt += `Host: ${hostUrl}\n`;
    return txt.trim();
  }, [rules, sitemapUrl, crawlDelay, addHostDirective, hostUrl]);

  const copy = () => {
    navigator.clipboard.writeText(output());
    toast.success("Copied to clipboard!");
  };

  const reset = () => {
    setRules([defaultRule()]);
    setSitemapUrl("");
    setCrawlDelay("");
    setAddHostDirective(false);
    setHostUrl("");
  };

  return (
    <ToolLayout
      toolName="Robots.txt Generator"
      toolDescription="Generate a properly formatted robots.txt file for your website in seconds."
      metaTitle="Robots.txt Generator – Free SEO Tool | ZentroSEO"
      metaDescription="Create a robots.txt file for your website. Configure user-agents, disallow/allow rules, sitemap URL, and crawl delay. Free SEO tool."
      canonicalPath="/resources/seo-toolkit/robots-txt-generator/"
    >
      <div className="space-y-6">
        {rules.map((rule) => (
          <Card key={rule.id} className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <Label>User-Agent</Label>
              {rules.length > 1 && (
                <Button size="icon" variant="ghost" onClick={() => removeRule(rule.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>
            <Input value={rule.userAgent} onChange={(e) => updateRule(rule.id, "userAgent", e.target.value)} placeholder="*" />

            <div>
              <Label className="mb-2 block">Disallow Paths</Label>
              {rule.disallow.map((d, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Input value={d} onChange={(e) => updateLine(rule.id, "disallow", i, e.target.value)} placeholder="/admin/" />
                  <Button size="icon" variant="ghost" onClick={() => removeLine(rule.id, "disallow", i)}><Trash2 className="w-3 h-3" /></Button>
                </div>
              ))}
              <Button size="sm" variant="outline" onClick={() => addLine(rule.id, "disallow")}><Plus className="w-3 h-3 mr-1" /> Add Disallow</Button>
            </div>

            <div>
              <Label className="mb-2 block">Allow Paths</Label>
              {rule.allow.map((a, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Input value={a} onChange={(e) => updateLine(rule.id, "allow", i, e.target.value)} placeholder="/" />
                  <Button size="icon" variant="ghost" onClick={() => removeLine(rule.id, "allow", i)}><Trash2 className="w-3 h-3" /></Button>
                </div>
              ))}
              <Button size="sm" variant="outline" onClick={() => addLine(rule.id, "allow")}><Plus className="w-3 h-3 mr-1" /> Add Allow</Button>
            </div>
          </Card>
        ))}

        <Button variant="outline" onClick={addRule} className="w-full"><Plus className="w-4 h-4 mr-1" /> Add User-Agent Rule</Button>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label>Sitemap URL</Label>
            <Input value={sitemapUrl} onChange={(e) => setSitemapUrl(e.target.value)} placeholder="https://example.com/sitemap.xml" className="mt-1" />
          </div>
          <div>
            <Label>Crawl Delay (seconds)</Label>
            <Input type="number" min="0" value={crawlDelay} onChange={(e) => setCrawlDelay(e.target.value)} placeholder="10" className="mt-1" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Switch checked={addHostDirective} onCheckedChange={setAddHostDirective} />
          <Label>Add Host Directive</Label>
        </div>
        {addHostDirective && (
          <Input value={hostUrl} onChange={(e) => setHostUrl(e.target.value)} placeholder="https://example.com" />
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label>Generated robots.txt</Label>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={reset}><RotateCcw className="w-3 h-3 mr-1" /> Reset</Button>
              <Button size="sm" onClick={copy}><Copy className="w-3 h-3 mr-1" /> Copy</Button>
            </div>
          </div>
          <Textarea readOnly value={output()} className="min-h-[180px] font-mono text-sm" />
        </div>
      </div>

      <ToolCTA />
    </ToolLayout>
  );
};

export default RobotsTxtGenerator;
