import { supabase } from "../utils/supabase";


export default function Home({ lessons }) {
  consosle.log({ lessons });
  return (
    <div>
    workiing
    </div>
  )
}


export const getStatitcProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*")

  return {
    props: {
      lessons,
    },
  };
};
