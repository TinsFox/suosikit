import { useState, useEffect } from "react";
import "./style.css";
import { Avatar, AvatarFallback, AvatarImage } from "~components/ui/avatar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~components/ui/button";
import { Textarea } from "~components/ui/textarea";
import { toast } from "~components/ui/use-toast";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~components/ui/select";
import { Input } from "~components/ui/input";

const FormSchema = z.object({
  note: z.string().max(160, {
    message: "remark must not be longer than 160 characters.",
  }),
  collection: z.string({
    required_error: "Please select an email to display.",
  }),
  tags: z.array(z.string()),
  url: z.string({
    required_error: "Please select an email to display.",
  }),
});

function IndexPopup() {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  useEffect(() => {
    // 获取当前活动标签页的信息
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];

      // 获取网页标题
      const tabTitle = currentTab.title;
      setTitle(tabTitle);

      // 获取网页图标
      const tabIcon = currentTab.favIconUrl;
      setIcon(tabIcon);
      const tabUrl = currentTab.url;
      setUrl(tabUrl);
      chrome.tabs.sendMessage(
        currentTab.id,
        { action: "getPageInfo" },
        (response) => {
          console.log("response", response);
          // setTitle(response.title);
          // setIcon(response.icon);
          setDescription(response.description);
        }
      );
    });
  }, []);
  return (
    <div className="p-4 w-[32rem]">
      <h4 className="font-semibold tracking-tight scroll-m-20">New</h4>
      <div className="flex">
        <Avatar className="inline-block">
          <AvatarImage src={icon} />
          <AvatarFallback>{title}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ml-4">
          <div>{title}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full m-auto space-y-6"
        >
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="w-16 mt-4 mr-2 text-right">
                  Note
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please input your note."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="collection"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="w-16 mt-4 mr-2 text-right">
                  Collection
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified e" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="w-16 mt-4 mr-2 text-right">
                  Tags
                </FormLabel>
                <Input {...field} placeholder="Add tags" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="w-16 mt-4 mr-2 text-right">Url</FormLabel>
                <Input {...field} placeholder="source url" />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default IndexPopup;
