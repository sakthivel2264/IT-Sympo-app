import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black/15">
      <h1 className="text-3xl font-bold text-center mb-4 underline">About Us</h1>
      <h1 className="text-2xl font-bold text-center mb-8">Department of Information Technology</h1>
      
      <Card className="mb-8 bg-transparent/50">
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p>To achieve academic excellence by producing competent IT professionals by inculcating self discipline and ethical values.</p>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-transparent/50">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide quality education by maintaining high standards</li>
            <li>To enhance their knowledge and skills in the field of Information Technology</li>
            <li>To create Professionals with personal responsibility and ethical leadership</li>
          </ul>
        </CardContent>
      </Card>

      <Tabs defaultValue="psos" className="mb-8 ">
        <TabsList className="grid w-full grid-cols-3 bg-transparent/50">
          <TabsTrigger value="psos">PSOs</TabsTrigger>
          <TabsTrigger value="peos">PEOs</TabsTrigger>
          <TabsTrigger value="pos">POs</TabsTrigger>
        </TabsList>
        <TabsContent value="psos">
          <Card className="bg-transparent/50">
            <CardHeader>
              <CardTitle>Program Specific Outcomes (PSOs)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-4 ">
                <li>
                  <strong>Analytical Thinking:</strong> Identify, formulate and solve engineering problems by applying mathematical foundations and algorithmic principles in IT environment to meet industrial challenges.
                </li>
                <li>
                  <strong>Principles of Information Technology:</strong> Analyze, design and develop Software, Multimedia, Web applications and Networking technologies for an efficient design of Information Technology based systems with high professional skills.
                </li>
                <li>
                  <strong>Engineering Ethics:</strong> Understand best practices, ethical standards and replicate the same for the industry, research and societal needs.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="peos">
          <Card className="bg-transparent/50">
            <CardHeader>
              <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Technical Proficiency with Employability Skills:</strong> To provide a strong foundation in mathematical, logical and engineering core concepts necessary to plan, analyze and solve engineering problems and to prepare them for employability.
                </li>
                <li>
                  <strong>Continuous Learning:</strong> To promote students to pursue higher studies and to continue the learning process through research and development in effective technical aspects.
                </li>
                <li>
                  <strong>Inculcating Entrepreneurial Skills:</strong> To prepare students to be an active team player, possessing strong interpersonal skills and leadership qualities with entrepreneurial ability.
                </li>
                <li>
                  <strong>Ethical Values:</strong> To inculcate ethical values in students on both professional and personal practices.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pos">
          <Card className="bg-transparent/85">
            <CardHeader>
              <CardTitle>Program Outcomes (POs)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Engineering Knowledge:</strong> Apply knowledge of mathematics, science, and engineering fundamentals to solve complex engineering problems.</li>
                <li><strong>Problem Analysis:</strong> Identify, formulate, and analyze complex engineering problems using principles of mathematics, natural sciences, and engineering sciences.</li>
                <li><strong>Design/Development of Solutions:</strong> Design solutions for complex engineering problems considering public health, safety, cultural, societal, and environmental factors.</li>
                <li><strong>Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and methods to analyze and interpret data for valid conclusions.</li>
                <li><strong>Modern Tool Usage:</strong> Apply appropriate techniques and modern engineering tools for complex engineering activities.</li>
                <li><strong>The Engineer and Society:</strong> Apply contextual knowledge to assess societal, health, safety, legal, and cultural issues in professional engineering practice.</li>
                <li><strong>Environment and Sustainability:</strong> Understand the impact of engineering solutions in societal and environmental contexts for sustainable development.</li>
                <li><strong>Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities.</li>
                <li><strong>Individual and Team Work:</strong> Function effectively as an individual and in diverse teams in multidisciplinary settings.</li>
                <li><strong>Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and society.</li>
                <li><strong>Project Management and Finance:</strong> Demonstrate knowledge of engineering and management principles in multidisciplinary environments.</li>
                <li><strong>Life-long Learning:</strong> Recognize the need for and engage in independent and life-long learning in the context of technological change.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}