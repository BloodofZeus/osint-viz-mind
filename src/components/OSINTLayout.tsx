import { useState } from "react";
import { Search, Settings, Database, Network, Target, Shield, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EntityPalette } from "./EntityPalette";
import { GraphCanvas } from "./GraphCanvas";
import { PropertyPanel } from "./PropertyPanel";
import { TopToolbar } from "./TopToolbar";

export const OSINTLayout = () => {
  const [selectedEntity, setSelectedEntity] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Toolbar */}
      <TopToolbar />
      
      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Entity Palette */}
        <div className="w-64 glass border-r border-border p-4 overflow-y-auto">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search entities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            
            {/* Entity Categories */}
            <EntityPalette onEntitySelect={setSelectedEntity} />
          </div>
        </div>

        {/* Center - Graph Canvas */}
        <div className="flex-1 relative bg-gradient-to-br from-background via-background to-muted/20">
          <GraphCanvas selectedEntity={selectedEntity} />
        </div>

        {/* Right Sidebar - Property Panel */}
        <div className="w-80 glass border-l border-border overflow-y-auto">
          <PropertyPanel selectedEntity={selectedEntity} />
        </div>
      </div>
    </div>
  );
};