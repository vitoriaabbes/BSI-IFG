package ifg.bsi;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/timer")
public class Timer {
    private final Template timer;

    public Timer(Template timer){
        this.timer = timer;
    }

    @GET
    public TemplateInstance timer(){
        return timer.instance();
    }
}
