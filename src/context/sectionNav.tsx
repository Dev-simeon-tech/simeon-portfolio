import { createContext, useState, useContext, useEffect, useRef } from "react";
import { sections } from "../components/ui/navbar";

type ids = "home" | "experience" | "projects" | "stack" | "contact";
type SectionNavContextProps = {
  activeId: ids;
  sectionRefs: React.RefObject<Record<string, HTMLElement | null>>;
  navRefs: React.RefObject<Record<string, HTMLAnchorElement | null>>;
  indicatorStyle: {
    left: number;
    width: number;
  };
};

export const SectionNavContext = createContext<SectionNavContextProps | null>(
  null
);

export const SectionNavProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeId, setActiveId] = useState<ids>("home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              ["home", "experience", "projects", "stack", "contact"].includes(
                entry.target.id
              )
            ) {
              setActiveId(entry.target.id as ids);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // active when 50% visible
    );

    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = navRefs.current[activeId];
      if (activeEl) {
        const rect = activeEl.getBoundingClientRect();
        const parentRect =
          activeEl.parentElement?.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setIndicatorStyle({
            left: rect.left - parentRect.left,
            width: rect.width,
          });
        }
      }
    };
    requestAnimationFrame(updateIndicator);
  }, [activeId]);

  const value = {
    activeId,
    sectionRefs,
    navRefs,
    indicatorStyle,
  };
  return (
    <SectionNavContext.Provider value={value}>
      {children}
    </SectionNavContext.Provider>
  );
};

export const useSectionNav = () => {
  const ctx = useContext(SectionNavContext);
  if (!ctx)
    throw new Error("useSectionNav must be used within SectionNavProvider");
  return ctx;
};
