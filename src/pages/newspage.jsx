"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

// Simple Button Component
const Button = ({ children, onClick, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// Simple Badge Component
const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground",
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

// Nutrition facts data with images
const nutritionFacts = [
  {
    id: 1,
    title: "Avocados: Nature's Superfood",
    fact: "Avocados contain more potassium than bananas - about 975mg per cup! They're also rich in healthy monounsaturated fats that help your body absorb fat-soluble vitamins.",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=400&fit=crop",
    category: "Heart Health",
    color: "from-green-500 to-emerald-600",
    benefits: ["High in Potassium", "Healthy Fats", "Vitamin Absorption"],
  },
  {
    id: 2,
    title: "Blueberries: Brain Boosters",
    fact: "These tiny powerhouses are packed with antioxidants called anthocyanins that can improve memory, brain function, and may help delay age-related cognitive decline.",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&h=400&fit=crop",
    category: "Brain Health",
    color: "from-blue-500 to-purple-600",
    benefits: ["Antioxidants", "Memory Boost", "Anti-Aging"],
  },
  {
    id: 3,
    title: "Dark Chocolate: Sweet Medicine",
    fact: "Dark chocolate with 70%+ cacao can help lower blood pressure, improve heart health, and boost brain function thanks to flavonoids and natural compounds.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&h=400&fit=crop",
    category: "Heart Health",
    color: "from-amber-600 to-orange-700",
    benefits: ["Lower Blood Pressure", "Heart Health", "Brain Function"],
  },
  {
    id: 4,
    title: "Spinach: Iron Powerhouse",
    fact: "Spinach is loaded with iron, but pairing it with vitamin C-rich foods like lemon or tomatoes helps your body absorb up to 5 times more iron!",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&h=400&fit=crop",
    category: "Nutrition",
    color: "from-green-600 to-teal-600",
    benefits: ["High Iron", "Vitamin C Synergy", "Energy Boost"],
  },
  {
    id: 5,
    title: "Salmon: Omega-3 Champion",
    fact: "Wild salmon provides essential omega-3 fatty acids that support brain health, reduce inflammation, and may help prevent heart disease and depression.",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop",
    category: "Brain Health",
    color: "from-pink-500 to-rose-600",
    benefits: ["Omega-3 Fatty Acids", "Anti-Inflammatory", "Heart Protection"],
  },
  {
    id: 6,
    title: "Greek Yogurt: Protein Powerhouse",
    fact: "Greek yogurt contains twice the protein of regular yogurt and is rich in probiotics that support digestive health and boost your immune system.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    category: "Digestive Health",
    color: "from-blue-400 to-cyan-500",
    benefits: ["High Protein", "Probiotics", "Immune Support"],
  },
]

function NewsPage() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex === nutritionFacts.length - 1 ? 0 : prevIndex + 1))
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex === nutritionFacts.length - 1 ? 0 : prevIndex + 1))
  }

  const prevFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex === 0 ? nutritionFacts.length - 1 : prevIndex - 1))
  }

  const goToFact = (index) => {
    setCurrentFactIndex(index)
  }

  const currentFact = nutritionFacts[currentFactIndex]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
              Recipe Nutrition News
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>
              Discover the amazing health benefits of everyday ingredients
            </p>
          </div>
        </div>
      </header>

      {/* Nutrition Facts Slider - FIXED HEIGHT */}
      <div
        style={{
          position: "relative",
          background: `linear-gradient(to right, ${getGradientColors(currentFact.color)})`,
          overflow: "hidden",
          height: "600px", 
        }}
      >
        <div style={{ position: "absolute", inset: "0", backgroundColor: "rgba(0, 0, 0, 0.2)" }}></div>

        <div
          style={{
            position: "relative",
            zIndex: "10",
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 1rem",
            height: "100%",
            display: "flex",
            alignItems: "center", 
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth >= 1024 ? "1fr 1fr" : "1fr",
              gap: "3rem",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Content Side - FIXED HEIGHT CONTAINER */}
            <div
              style={{
                color: "white",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <Sparkles style={{ height: "1.5rem", width: "1.5rem" }} />
                <Badge className="bg-white/20 text-white border-white/30">Nutrition Fact #{currentFactIndex + 1}</Badge>
                <Badge className="bg-white/20 text-white border-white/30">{currentFact.category}</Badge>
              </div>

              <h2
                style={{
                  fontSize: window.innerWidth >= 1024 ? "3rem" : "2.25rem",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "1.5rem",
                  minHeight: "3.6rem", // FIXED HEIGHT FOR TITLE
                }}
              >
                {currentFact.title}
              </h2>

              <p
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.75",
                  opacity: "0.95",
                  marginBottom: "1.5rem",
                  minHeight: "5.25rem", // FIXED HEIGHT FOR DESCRIPTION
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {currentFact.fact}
              </p>

              {/* Benefits - FIXED HEIGHT CONTAINER */}
              <div style={{ marginBottom: "1.5rem", minHeight: "4rem" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.75rem" }}>Key Benefits:</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {currentFact.benefits.map((benefit, index) => (
                    <Badge
                      key={index}
                      className="bg-white/20 text-white border-white/30"
                      style={{ padding: "0.25rem 0.75rem" }}
                    >
                      ✓ {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: "1rem", marginBottom: "1rem" }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevFact}
                  style={{ color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", height: "3rem", width: "3rem" }}
                >
                  <ChevronLeft style={{ height: "1.5rem", width: "1.5rem" }} />
                </Button>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {nutritionFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToFact(index)}
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: index === currentFactIndex ? "white" : "rgba(255, 255, 255, 0.5)",
                        transform: index === currentFactIndex ? "scale(1.25)" : "scale(1)",
                        transition: "all 0.3s",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextFact}
                  style={{ color: "white", backgroundColor: "rgba(255, 255, 255, 0.1)", height: "3rem", width: "3rem" }}
                >
                  <ChevronRight style={{ height: "1.5rem", width: "1.5rem" }} />
                </Button>
              </div>

              {/* Auto-play Toggle */}
              <div>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.875rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "white")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.8)")}
                >
                  {isAutoPlaying ? "⏸️ Pause Auto-play" : "▶️ Resume Auto-play"}
                </button>
              </div>
            </div>

            {/* Image Side - FIXED HEIGHT CONTAINER */}
            <div
              style={{
                position: "relative",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                <img
                  src={currentFact.image || "/placeholder.svg"}
                  alt={currentFact.title}
                  style={{
                    width: "100%",
                    height: "400px", // FIXED IMAGE HEIGHT
                    objectFit: "cover",
                    transition: "all 0.7s",
                  }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/4ade80/ffffff?text=${encodeURIComponent(currentFact.title.split(":")[0])}`
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
                  }}
                ></div>
              </div>

              {/* Floating Info Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "1rem",
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827" }}>
                    {currentFactIndex + 1}/{nutritionFacts.length}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>Nutrition Facts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "0.25rem",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "white",
              transition: "all 0.3s ease-linear",
              width: `${((currentFactIndex + 1) / nutritionFacts.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Quick Navigation */}
      <div style={{ backgroundColor: "white", padding: "2rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Explore All Nutrition Facts
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${window.innerWidth >= 1024 ? "6" : window.innerWidth >= 768 ? "3" : "2"}, minmax(0, 1fr))`,
              gap: "1rem",
            }}
          >
            {nutritionFacts.map((fact, index) => (
              <button
                key={fact.id}
                onClick={() => goToFact(index)}
                style={{
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: `2px solid ${index === currentFactIndex ? "#f97316" : "#e5e7eb"}`,
                  backgroundColor: index === currentFactIndex ? "#fff7ed" : "transparent",
                  transition: "all 0.3s",
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  if (index !== currentFactIndex) {
                    e.target.style.borderColor = "#d1d5db"
                    e.target.style.backgroundColor = "#f9fafb"
                  }
                }}
                onMouseOut={(e) => {
                  if (index !== currentFactIndex) {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "transparent"
                  }
                }}
              >
                <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#111827", marginBottom: "0.25rem" }}>
                  {fact.title.split(":")[0]}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>{fact.category}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div style={{ backgroundColor: "#f3f4f6", padding: "3rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>
              Why Nutrition Matters in Cooking
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#6b7280", maxWidth: "48rem", margin: "0 auto" }}>
              Understanding the nutritional value of ingredients helps you create healthier, more balanced meals. Each
              ingredient brings unique benefits that can enhance both flavor and wellness.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth >= 768 ? "repeat(3, minmax(0, 1fr))" : "1fr",
              gap: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ fontSize: "1.875rem", marginBottom: "1rem" }}>🧠</div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Brain Health</h4>
              <p style={{ color: "#6b7280" }}>
                Foods rich in omega-3s, antioxidants, and vitamins support cognitive function and memory.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ fontSize: "1.875rem", marginBottom: "1rem" }}>❤️</div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Heart Health</h4>
              <p style={{ color: "#6b7280" }}>
                Ingredients with healthy fats, fiber, and potassium help maintain cardiovascular wellness.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ fontSize: "1.875rem", marginBottom: "1rem" }}>💪</div>
              <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Energy & Strength</h4>
              <p style={{ color: "#6b7280" }}>
                Protein-rich foods and complex carbohydrates provide sustained energy for daily activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get gradient colors
function getGradientColors(colorClass) {
  const gradients = {
    "from-green-500 to-emerald-600": "#10b981, #059669",
    "from-blue-500 to-purple-600": "#3b82f6, #9333ea",
    "from-amber-600 to-orange-700": "#d97706, #c2410c",
    "from-green-600 to-teal-600": "#059669, #0d9488",
    "from-pink-500 to-rose-600": "#ec4899, #e11d48",
    "from-blue-400 to-cyan-500": "#60a5fa, #06b6d4",
  }
  return gradients[colorClass] || "#10b981, #059669"
}

export default NewsPage
