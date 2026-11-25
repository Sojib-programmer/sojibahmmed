import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface NameVariant {
  slug: string;
  label: string;
  path: string;
  sort_order: number;
}

export function useNameVariants() {
  return useQuery({
    queryKey: ["name_variants"],
    queryFn: async (): Promise<NameVariant[]> => {
      const { data, error } = await supabase
        .from("name_variants")
        .select("slug,label,path,sort_order")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as NameVariant[];
    },
    staleTime: 5 * 60 * 1000,
  });
}
