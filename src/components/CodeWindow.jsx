export default function CodeWindow() {
    return (
        <div className="code-window">
            <div className="code-bar">
                <div className="dot dot-r" />
                <div className="dot dot-y" />
                <div className="dot dot-g" />
                <span className="code-fname">SecurityConfig.java</span>
            </div>
            <div className="code-body">
                <span className="ann">@Configuration</span>{"\n"}
                <span className="ann">@EnableWebSecurity</span>{"\n"}
                <span className="kw">public class </span><span className="cls">SecurityConfig</span> {"{"}{"\n"}
                {"  "}<span className="ann">@Bean</span>{"\n"}
                {"  "}<span className="kw">public </span><span className="cls">SecurityFilterChain</span>{" "}
                <span className="fn">filterChain</span>(<span className="cls">HttpSecurity</span> http){"\n"}
                {"      "}<span className="kw">throws </span><span className="cls">Exception</span> {"{"}{"\n"}
                {"    "}http{"\n"}
                {"      "}.<span className="fn">csrf</span>(<span className="cls">AbstractHttpConfigurer</span>::<span className="fn">disable</span>){"\n"}
                {"      "}.<span className="fn">authorizeHttpRequests</span>(auth {"=>"} auth{"\n"}
                {"        "}.<span className="fn">requestMatchers</span>(<span className="str">"/api/auth/**"</span>).<span className="fn">permitAll</span>(){"\n"}
                {"        "}.<span className="fn">anyRequest</span>().<span className="fn">authenticated</span>()){"\n"}
                {"      "}.<span className="fn">sessionManagement</span>(s {"=>"} s{"\n"}
                {"        "}.<span className="fn">sessionCreationPolicy</span>(<span className="cls">STATELESS</span>)){"\n"}
                {"      "}.<span className="fn">addFilterBefore</span>(jwtFilter, <span className="cls">UsernamePasswordAuthenticationFilter</span>.<span className="kw">class</span>);{"\n"}
                {"    "}<span className="kw">return</span> http.<span className="fn">build</span>();{"\n"}
                {"  "}{"}"}{"\n"}
                {"}"}
            </div>
        </div>
    );
}
